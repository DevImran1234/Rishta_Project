import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import EmojiPicker from "emoji-picker-react";
import { Paperclip, Smile, Send, X } from "lucide-react";
import ClientNavbar from "../../Components/ClientNavbar/ClientNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ClientFooter from "../../Components/ClientFooter/ClientFooter";
import { useLocation, useParams } from "react-router-dom";

const Message = () => {
  const location = useLocation();
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [locations, setLocations] = useState(null);

  const username = localStorage.getItem("LoggedInUser");
  const email = localStorage.getItem("LoggedInUserEmail");
  const { clientName } = useParams();

  const clientEmail = location.state?.clientEmail;




  
  useEffect(() => {
    alert(clientEmail);
    const newSocket = io("http://localhost:8000", {
      transports: ["websocket"],
      withCredentials: true,
      auth: {
        token: localStorage.getItem("usertoken"),
      },
    });

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
      if (clientEmail) {
        newSocket.emit("joinRoom", { email: clientEmail }, (response) => {
          console.log("Join room response:", response);
        });
      }
    });

    newSocket.on("connect_error", (err) => console.error("Socket connection error:", err));
    newSocket.on("error", (err) => console.error("Socket error:", err));
    newSocket.on("disconnect", (reason) => console.log("Socket disconnected:", reason));

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [clientEmail]);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (message) => {
      console.log("New message received:", message);
      setMessages((prev) => [...prev, message]);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  useEffect(() => {
    if (!socket || !clientEmail) return;

    console.log("Fetching messages for client:", clientEmail);
    socket.emit("getMessages", { fromEmail: username, withEmail: clientEmail }, (response) => {
      console.log("Response from getMessages:", response);
      if (response?.error) {
        console.error("Error fetching chat history:", response.error);
      } else {
        setMessages(response);
      }
    });
  }, [socket, clientEmail, username]);

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
        console.log("Location shared:", position.coords);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSendMessage = () => {
    if (!socket) {
      console.error("Socket is not connected");
      return;
    }
    if (!clientEmail) {
      console.error("Recipient email is missing!");
      return;
    }
    if (!message.trim()) {
      console.warn("Cannot send an empty message");
      return;
    }

    const newMessage = {
      from: email,
      message,
      to: clientEmail,
      // image: file && file.type.startsWith("image") ? filePreview : null,
      // video: file && file.type.startsWith("video") ? filePreview : null,
      // file: file && !file.type.startsWith("image") && !file.type.startsWith("video") ? filePreview : null,
      // location: locations || null,
    };

    console.log("Sending message:", newMessage);
    
    socket.emit("sendMessage", newMessage, (response) => {
      console.log("Server Response:", response); 

      if (response?.error) {
        console.error("Error sending message:", response.error);
      } else {
        console.log("Message sent successfully:", response);
        setMessages((prev) => [...prev, newMessage]);
        setMessage("");
        setFile(null);
        setLocations(null);
        setFilePreview(null);
      }
    });
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

            <div className="pt-[12vh] px-4 w-full flex flex-col space-y-3 overflow-y-auto max-h-[500px]">
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded-lg ${msg.from === username ? "bg-blue-100 self-end" : "bg-gray-200 self-start"}`}>
                  <p className="text-sm font-semibold">{msg.from}</p>
                  {msg.image && <img src={msg.image} alt="Sent" className="w-40 mt-2 rounded-lg" />}
                  {msg.video && <video src={msg.video} controls className="w-40 mt-2 rounded-lg" />}
                  {msg.file && <a href={msg.file} download className="text-blue-500 underline mt-2 block">Download File</a>}
                  <p className="text-md mt-1">{msg.message}</p>
                  {msg.location && <p className="text-sm text-gray-500">Location: {msg.location.lat}, {msg.location.lng}</p>}
                </div>
              ))}
            </div>

            <div className="w-full p-4 flex items-center space-x-2 border-t mt-auto">
              <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <Smile className="text-gray-500 hover:text-gray-700" />
              </button>
              {showEmojiPicker && <div className="absolute bottom-14 left-4"><EmojiPicker onEmojiClick={handleEmojiClick} /></div>}
              <input type="text" className="flex-grow p-2 border rounded-lg outline-none" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
              <input type="file" id="fileUpload" className="hidden" onChange={handleFileChange} />
              <label htmlFor="fileUpload"><Paperclip className="text-gray-500 hover:text-gray-700 cursor-pointer" /></label>
              <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg"><Send /></button>
            </div>
          </div>
        </main>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Message;