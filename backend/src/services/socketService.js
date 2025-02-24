import { Server } from "socket.io";
import Redis from "ioredis";
import User from "../models/userModel.js";
import Chat from "../models/chatModel.js";
import mongoose from "mongoose";

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});

function setupSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  });

  redisClient.on("error", (err) => console.log("Redis Client Error", err));

  const authMiddleware = async (socket, next) => {
    const { token } = socket.handshake.query;
    const user = await User.findOne({ token });

    if (!user) {
      return next(new Error("Authentication error"));
    }

    socket.user = user;
    next();
  };

  io.use(authMiddleware);

  io.on("connection", async (socket) => {
    console.log(`${socket.user.email} connected`);
    const userId = socket.user._id;

    await User.updateOne(
      { _id: userId },
      { $set: { isOnline: true, lastSeen: null } }
    );

    io.emit("userOnline", { userId });
    const redisSubscriber = redisClient.duplicate();

    // ✅ **Join Room Based on Emails**
    socket.on("joinRoom", async ({ email }) => {
      const room = [socket.user.email, email].sort().join("-");
      socket.join(room);
      redisSubscriber.subscribe(room);
      console.log(`${socket.user.email} joined room ${room}`);
    });

    // ✅ **Send Message**
    socket.on("sendMessage", async (data) => {
      let { from, to, message, image, audio, video, file, location } = data;
    
      // Ensure "from" is valid (either from the payload or authenticated user)
      from = from || socket.user.email;
    
      if (!to) {
        return socket.emit("error", { message: "Recipient email is required" });
      }
    
      // Fetch sender and recipient from the database
      const sender = await User.findOne({ email: from });
      const recipient = await User.findOne({ email: to });
    
      if (!sender) {
        return socket.emit("error", { message: "Sender user not found" });
      }
    
      if (!recipient) {
        return socket.emit("error", { message: "Recipient user not found" });
      }
    
      let messageType = "text";
      let locationData = { lat: "", lng: "" };
    
      if (image) messageType = "image";
      if (audio) messageType = "audio";
      if (video) messageType = "video";
      if (file) messageType = "file";
      if (location) {
        messageType = "location";
        locationData = { lat: location.lat, lng: location.lng };
      }
    
      // Generate room based on emails
      const room = [sender.email, recipient.email].sort().join("-");
      
      const chatMessage = {
        from: sender._id, // Use sender's ID
        to: recipient._id, // Use recipient's ID
        message,
        image: image || "",
        audio: audio || "",
        video: video || "",
        file: file || "",
        type: messageType,
        location: locationData,
        createdAt: new Date(),
      };
    
      try {
        const savedMessage = await Chat.create(chatMessage);
        console.log("Message saved:", savedMessage);
    
        // Publish message to Redis for real-time updates
        redisClient.publish(room, JSON.stringify(savedMessage));
    
        // Emit message to the room
        io.to(room).emit("newMessage", savedMessage);
      } catch (error) {
        console.error("Error saving chat message:", error);
      }
    });
    

    // **Get Messages Using Emails**
    socket.on("getMessages", async ({ fromEmail, withEmail }) => {
      if (!fromEmail || !withEmail) {
        return socket.emit("error", { message: "Both sender and recipient emails are required" });
      }

      // Fetch sender and recipient users based on their emails
      const sender = await User.findOne({ email: fromEmail });
      const recipient = await User.findOne({ email: withEmail });

      // if (!sender) {
      //   return socket.emit("error", { message: "Sender user not found" });
      // }

      // if (!recipient) {
      //   return socket.emit("error", { message: "Recipient user not found" });
      // }

      // Fetch messages between sender and recipient
      const messages = await Chat.find({
        $or: [
          { from: sender._id, to: recipient._id },
          { from: recipient._id, to: sender._id },
        ],
      }).sort({ createdAt: 1 });
console.log(messages,'here is uor');

      // Emit chat history
      socket.emit("chatHistory", messages);
    });

    // ✅ **Get List of Chats for Logged-in User**
    socket.on("getChats", async () => {
      try {
        const userId = socket.user._id;

        const chats = await Chat.aggregate([
          {
            $match: {
              $or: [
                { from: mongoose.Types.ObjectId(userId) },
                { to: mongoose.Types.ObjectId(userId) },
              ],
            },
          },
          { $sort: { createdAt: -1 } },
          {
            $group: {
              _id: {
                otherUser: {
                  $cond: {
                    if: { $eq: ["$from", mongoose.Types.ObjectId(userId)] },
                    then: "$to",
                    else: "$from",
                  },
                },
              },
              latestMessage: { $first: "$message" },
              latestMessageTime: { $first: "$createdAt" },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "_id.otherUser",
              foreignField: "_id",
              as: "userDetails",
            },
          },
          { $unwind: "$userDetails" },
          {
            $project: {
              _id: "$userDetails._id",
              email: "$userDetails.email",
              latestMessage: 1,
              latestMessageTime: 1,
            },
          },
          { $sort: { latestMessageTime: -1 } },
        ]);

        socket.emit("chatList", chats);
      } catch (error) {
        console.error("Error fetching chat list:", error);
        socket.emit("error", { message: "Error fetching chat list" });
      }
    });

    redisSubscriber.on("message", (room, message) => {
      io.to(room).emit("newMessage", JSON.parse(message));
    });

    socket.on("disconnect", async () => {
      console.log(`${socket.user.email} disconnected`);
      await User.updateOne(
        { _id: socket.user._id },
        { $set: { isOnline: false, lastSeen: new Date() } }
      );
      io.emit("userOffline", { userId: socket.user._id });
    });
  });
}

export default setupSocket;
