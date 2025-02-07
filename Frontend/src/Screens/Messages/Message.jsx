import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import EmojiPicker from "emoji-picker-react";
import { Paperclip, Smile, Send, X } from "lucide-react";
import ClientNavbar from "../../Components/ClientNavbar/ClientNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ClientFooter from "../../Components/ClientFooter/ClientFooter";
import { useLocation } from "react-router-dom";

const token = localStorage.getItem("usertoken");
const socket = io("http://localhost:8000", {
  transports: ["websocket"],
  auth: {
    token: token, 
  },
});

const Message = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [locations, setLocations] = useState(null);

  const clientName = location.state?.clientName || "Unknown Client";
  const username = localStorage.getItem("LoggedInUser");

  useEffect(() => {
    if (username && clientName) {
      socket.emit("joinRoom", { username, groupId: clientName }, (response) => {
        if (response.error) {
          alert("Error joining the room: " + response.error);
        } else {
          alert(`You are now connected to the chat with: ${clientName}`);
        }
      });

      socket.on("newMessage", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });

      socket.on("privateMessageHistory", (previousMessages) => {
        setMessages(previousMessages);
      });

      return () => {
        socket.emit("leaveRoom", { username, groupId: clientName });
        socket.off("newMessage");
        socket.off("privateMessageHistory");
      };
    }
  }, [clientName, username]);

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile);
      setFilePreview(fileURL);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview(null);
  };

  const handleLocationShare = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocations({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSendMessage = () => {
    if (message.trim() || file || locations) {
      const newMessage = {
        from: username,
        message,
        image: file && file.type.startsWith("image") ? filePreview : null,
        video: file && file.type.startsWith("video") ? filePreview : null,
        file: file && !file.type.startsWith("image") && !file.type.startsWith("video") ? filePreview : null,
        location: locations || null,
        to: clientName, // Sending to the specific client
      };

      socket.emit("sendMessage", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
      setFile(null);
      setLocations(null);
      setFilePreview(null);
    } else {
      alert("Message cannot be empty.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ClientNavbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="bg-white min-h-[calc(100vh-theme(spacing.20))] mt-5 sm:mt-8 md:mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto rounded-lg shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex items-center justify-center">
              <h1 className="text-2xl sm:text-3xl font-medium text-white">Messages</h1>
            </div>

            {/* Message List */}
            <div className="pt-[12vh] px-4 w-full flex flex-col space-y-3 overflow-y-auto max-h-[500px]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    msg.from === username ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
                  }`}
                >
                  <p className="text-sm font-semibold">{msg.from}</p>
                  {msg.image && <img src={msg.image} alt="Sent" className="w-40 mt-2 rounded-lg" />}
                  {msg.video && <video src={msg.video} controls className="w-40 mt-2 rounded-lg" />}
                  {msg.file && (
                    <a href={msg.file} download className="text-blue-500 underline mt-2 block">
                      Download File
                    </a>
                  )}
                  <p className="text-md mt-1">{msg.message}</p>
                  {msg.location && (
                    <p className="text-sm text-gray-500">
                      Location: {msg.location.lat}, {msg.location.lng}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="w-full p-4 flex items-center space-x-2 border-t mt-auto">
              <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <Smile className="text-gray-500 hover:text-gray-700" />
              </button>
              {showEmojiPicker && (
                <div className="absolute bottom-14 left-4">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}

              <input
                type="text"
                className="flex-grow p-2 border rounded-lg outline-none"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <input type="file" id="fileUpload" className="hidden" onChange={handleFileChange} />
              <label htmlFor="fileUpload">
                <Paperclip className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              </label>

              {filePreview && (
                <div className="relative">
                  <img src={filePreview} alt="Preview" className="w-12 h-12 rounded-md" />
                  <button onClick={handleRemoveFile} className="absolute top-0 right-0 text-red-500">
                    <X />
                  </button>
                </div>
              )}

              <button onClick={handleLocationShare} className="text-blue-500 text-sm">📍</button>

              <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg">
                <Send />
              </button>
            </div>
          </div>
        </main>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Message;
