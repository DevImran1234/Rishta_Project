import mongoose from "mongoose";
const { Schema, model } = mongoose;

const chatSchema = new Schema(
  {
    from: { type: Schema.Types.ObjectId, ref: "User" },
    to: { type: Schema.Types.ObjectId, ref: "User" },
    group: { type: Schema.Types.ObjectId, ref: "Group" },
    message: { type: String },
    image: { type: String },
    audio: { type: String },
    video: { type: String },
    file: { type: String },
    location: {
      lat: { type: String },
      lng: { type: String },
    },
    reactions: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        emoji: { type: String },
      },
    ],
    replyTo: { type: Schema.Types.ObjectId, ref: "Chat" },
    stars: [{ type: Schema.Types.ObjectId, ref: "User" }],
    readBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    deletedBy: [{ type: Schema.Types.ObjectId, ref: "User" }], // Updated to ObjectId
    type: {
      type: String,
      enum: ["text", "image", "audio", "video", "file", "location"],
    },
    read: { type: Boolean, default: false },
    archivedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    pinned: { type: Boolean, default: false },
    pinnedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Chat = model("Chat", chatSchema);

export default Chat;
