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
    console.log(`${socket.user.username} connected`);
    const userId = socket.user._id;

    await User.updateOne(
      { _id: userId },
      { $set: { isOnline: true, lastSeen: null } }
    );

    io.emit("userOnline", { userId });
    const redisSubscriber = redisClient.duplicate();

    socket.on("joinRoom", async ({ username }) => {
      const room = [socket.user.username, username].sort().join("-");
      socket.join(room);
      redisSubscriber.subscribe(room);
      console.log(`${socket.user.username} joined room ${room}`);
    });

    socket.on("sendMessage", async (data) => {
      let { to, message, image, audio, video, file, location } = data;
      let from = data.from || socket.user._id;

      if (!to) {
        return socket.emit("error", { message: "Recipient is required" });
      }

      const recipient = await User.findOne({ username: to });
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

      const room = [socket.user.username, to].sort().join("-");
      const chatMessage = {
        from,
        to: recipient._id,
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
        console.log(savedMessage);
        redisClient.publish(room, JSON.stringify(savedMessage));
      } catch (error) {
        console.error("Error saving chat message:", error);
      }
    });

    socket.on("getMessages", async ({ withUser }) => {
      if (!withUser) {
        return socket.emit("error", { message: "User to chat with is required" });
      }

      const recipient = await User.findOne({ username: withUser });
      if (!recipient) {
        return socket.emit("error", { message: "Recipient user not found" });
      }

      const messages = await Chat.find({
        $or: [
          { from: socket.user._id, to: recipient._id },
          { from: recipient._id, to: socket.user._id },
        ],
      }).sort({ createdAt: 1 });

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
              username: "$userDetails.username",
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
      console.log(`${socket.user.username} disconnected`);
      await User.updateOne(
        { _id: socket.user._id },
        { $set: { isOnline: false, lastSeen: new Date() } }
      );
      io.emit("userOffline", { userId: socket.user._id });
    });
  });
}

export default setupSocket;
