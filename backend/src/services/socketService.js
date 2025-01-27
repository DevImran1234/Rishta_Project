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

    socket.on("joinRoom", async ({ username, groupId }) => {
      if (groupId) {
        const group = await Group.findById(groupId);
        if (group && group.members.includes(socket.user._id)) {
          socket.join(groupId);
          redisSubscriber.subscribe(groupId); // Subscribe to the group channel in Redis
          console.log(`${socket.user.username} joined group ${groupId}`);
        } else {
          return socket.emit("error", "Not a member of this group");
        }
      } else {
        const room = [socket.user.username, username].sort().join("-");
        socket.join(room);
        redisSubscriber.subscribe(room);
        console.log(`${socket.user.username} joined room ${room}`);
      }
    });

    socket.on("sendMessage", async (data) => {
      let chatMessage;
      const { to, group, message, image, audio, video, file, location } = data;
      let from = data.from;

      if (!to && !group) {
        return socket.emit("error", { message: "Receiver/group required" });
      }

      if (!from) {
        from = socket.user._id;
      } else {
        const user = await User.findOne({ username: from });
        if (!user) {
          return socket.emit("error", { message: "Sender user not found" });
        }
        from = user._id; // Use ObjectId for the chat message
      }

      let recipient = null;
      if (to) {
        recipient = await User.findOne({ username: to });
        if (!recipient) {
          return socket.emit("error", { message: "Recipient user not found" });
        }
      }

      if (to) {
        const isBlocked = await Report.findOne({
          $or: [
            { userId: from, personId: recipient._id, block: true },
            { userId: recipient._id, personId: from, block: true },
          ],
        });

        if (isBlocked) {
          return socket.emit("error", {
            message:
              "You cannot send messages to this user because one of you has been blocked.",
          });
        }
      }

      let messageType = "text";
      let locationData = { lat: "", lng: "" };

      if (image) messageType = "image";
      if (audio) messageType = "audio";
      if (video) messageType = "video";
      if (file) messageType = "file";
      if (message) messageType = "text";
      if (location) {
        messageType = "location";
        locationData = { lat: location.lat, lng: location.lng };
      }

      if (group) {
        chatMessage = {
          from,
          group,
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

          // Publish the message to the group's Redis channel
          redisClient.publish(group, JSON.stringify(savedMessage));
        } catch (error) {
          console.error("Error saving chat message:", error);
        }
      } else {
        const room = [socket.user.username, to].sort().join("-");
        chatMessage = {
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

          // Publish the message to the corresponding room in Redis
          redisClient.publish(room, JSON.stringify(savedMessage));
        } catch (error) {
          console.error("Error saving chat message:", error);
        }
      }
    });

    redisSubscriber.on("message", (room, message) => {
      io.to(room).emit("newMessage", JSON.parse(message));
    });
  })
}

export default setupSocket;
