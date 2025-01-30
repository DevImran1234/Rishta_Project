import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import EmojiPicker from 'emoji-picker-react';
import { Paperclip, Smile, Send } from 'lucide-react';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';

const socket = io('http://localhost:8000', { transports: ['websocket'] });

const Message = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const username = localStorage.getItem('LoggedInUser');

  useEffect(() => {
    socket.on('newMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
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
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSendMessage = () => {
    if (message.trim() || file || location) {
      const newMessage = {
        from: username,
        message,
        image: file && file.type.startsWith('image') ? URL.createObjectURL(file) : '',
        location: location || null,
        audio: file && file.type.startsWith('audio') ? file : null,
        video: file && file.type.startsWith('video') ? URL.createObjectURL(file) : null,
        file: file && !file.type.startsWith('image') && !file.type.startsWith('audio') && !file.type.startsWith('video') ? file : null, // Handle other files (DOCX)
      };

      socket.emit('sendMessage', newMessage);

      setMessages((prev) => [...prev, newMessage]);
      setMessage('');
      setFile(null);
      setLocation(null);
      setFilePreview(null); // Clear file preview after sending the message
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
            <div className="pt-[12vh] mt-2 sm:mt-3 md:mt-5 px-4 sm:px-6 md:px-8 text-center w-full overflow-y-auto max-h-[60vh]">
              {messages.length === 0 ? (
                <p className="text-sm sm:text-base">No messages yet</p>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={`p-2 my-2 rounded-lg ${msg.from === 'currentUser' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}>
                    <strong>{msg.from}:</strong> {msg.message}
                    {msg.image && <img src={msg.image} alt="file" className="max-w-full mt-2" />}
                    {msg.audio && <audio controls className="mt-2"><source src={msg.audio} type="audio/mpeg" /></audio>}
                    {msg.video && <video controls className="mt-2"><source src={msg.video} type="video/mp4" /></video>}
                    {msg.file && <a href={msg.file} download className="mt-2 text-blue-500">Download File</a>}
                    {msg.location && (
                      <div className="mt-2">
                        <p>Location: {msg.location.lat}, {msg.location.lng}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center bg-gray-100 p-3 rounded-lg shadow-md">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none"
              />
              <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="mx-2 text-gray-500">
                <Smile size={24} />
              </button>
              <button onClick={handleLocationShare} className="mx-2 text-gray-500">
                📍
              </button>
              <label className="cursor-pointer text-gray-500 mx-2">
                <Paperclip size={24} />
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
              <button onClick={handleSendMessage} className="text-blue-500">
                <Send size={24} />
              </button>
            </div>

            {filePreview && (
              <div className="absolute bottom-16 left-4 right-4 bg-white shadow-lg p-4 rounded-lg">
                <h3 className="text-lg font-medium">File Preview</h3>
                {file && file.type.startsWith('image') && <img src={filePreview} alt="preview" className="max-w-full mt-2" />}
                {file && file.type.startsWith('video') && <video controls src={filePreview} className="max-w-full mt-2" />}
                {file && file.type.startsWith('audio') && <audio controls src={filePreview} className="mt-2" />}
                <button onClick={handleRemoveFile} className="mt-2 text-red-500">Remove</button>
              </div>
            )}

            {showEmojiPicker && (
              <div className="absolute bottom-16 right-4 bg-white shadow-lg rounded-lg">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
        </main>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Message;
