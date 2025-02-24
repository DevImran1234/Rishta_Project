import React, { useEffect, useState } from "react";
import "./css/ClinetCards.css";
// import chaticon from "../../images/chat.png";
import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import SubscriptionForm from "../../Screens/PaymentOption/PaymentOption";
import LoadingSpinner from "../Loader/Loader";

const ClinetCards = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeProfileId, setActiveProfileId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/profile")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
        setIsLoading(false);
      });
  }, []);

  const handleMenuOpen = (event, profileId) => {
    setAnchorEl(event.currentTarget);
    setActiveProfileId(profileId);
  };

  const handleViewDetails = () => {
    setIsPopupOpen(true);
    navigate(`/UserProfile/${activeProfileId}`);
    handleMenuClose();
  };

  const closePopup = () => setIsPopupOpen(false);

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveProfileId(null);
  };

  const handleEdit = () => {
    navigate(`/UserEditProfile/${activeProfileId}`);
    handleMenuClose();
  };

  const handleMessage = () => {
    fetch("http://localhost:8000/api/profile")
      .then(response => response.json())
      .then(data => {
        const emails = extractEmails(data);
        if (emails.length === 0) {
          alert("No registered user found to initiate chat.");
          return;
        }
  
        const creatorEmail = emails[0];
        const userId = data[0]?._id;
  
        console.log("UserId:", userId);
        console.log("Email:", creatorEmail);
  
        navigate(`/Messages/${userId}`, { state: { clientEmail: creatorEmail } });
      })
      .catch(error => console.error("Error fetching profiles:", error));
  };
  



const extractEmails = (profiles) => {
  return profiles
    .filter(profile => profile.userId && profile.userId.email) 
    .map(profile => profile.userId.email);
};

fetch("http://localhost:8000/api/profile")
  .then(response => response.json())
  .then(data => {
    const emails = extractEmails(data);
    console.log("Extracted Emails:", emails);
  })
  .catch(error => console.error("Error fetching profiles:", error));

  // alert(extractEmails)

  
  

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/profile/${activeProfileId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProfiles((prevProfiles) =>
          prevProfiles.filter((profile) => profile._id !== activeProfileId)
        );
        alert("Profile deleted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
      alert("An error occurred while deleting the profile.");
    } finally {
      handleMenuClose();
    }
  };

  const handleSubscribe = () => {
    setIsPopupOpen(true);
  };

  if (isLoading) {
    return <div><LoadingSpinner /></div>;
  }

  if (profiles.length === 0) {
    return <div>No profiles available.</div>;
  }

  return (
    <div className="grid container mx-auto pt-[40px] grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {profiles.map((profile) => {
        const fullName = `${profile.firstName} ${profile.lastName}`;
        const age =
          new Date().getFullYear() - new Date(profile.dateOfBirth).getFullYear();
        const { maritalStatus, gender, image } = profile;

        return (
          <div
            key={profile._id}
            className="bg-white mb-[10px] mx-auto rounded-lg w-[500px] shadow-md px-[30px] py-[20px] max-[767px]:w-[100%] max-[767px]:px-[20px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0">
                  {image ? (
                    <img
                      src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260079/sidebar/ct5gx1rrxtln5sbchpzy.png"
                      alt={fullName}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                      No Image
                    </div>
                  )}
                </div>
                <div className="ml-4">
                  <h2 className="text-[28px] font-semibold text-[#2F82A0] max-[767px]:text-[18px]">
                    {fullName}
                  </h2>
                </div>
              </div>
              <div>
                <button
                  onClick={(event) => handleMenuOpen(event, profile._id)}
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
                >
                  <FiMoreVertical size={20} />
                </button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && activeProfileId === profile._id}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem onClick={handleViewDetails}>View Details</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="age text-center pt-[12px]">
                <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]">
                  <b>Age:</b> {age}
                </p>
              </div>
              <div className="age pt-[12px]">
                <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]">
                  <b>Marital Status:</b> {maritalStatus}
                </p>
                <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]">
                  <b>Gender:</b> {gender}
                </p>
              </div>
            </div>
            <div className="mx-auto flex flex-col md:flex-row justify-between md:justify-between pt-[20px] gap-2 md:gap-0">
              <button className="bg-[#E42B88B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
                <img src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260079/sidebar/ct5gx1rrxtln5sbchpzy.png" alt="Star Icon" className="w-[16px] h-[16px]" /> Favourite
              </button>
              <button
  onClick={() => handleMessage(profile)} 
  className="bg-[#2F82A0B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]"
>
  <img src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260076/sidebar/uokjxw03pinhxibom2jc.png" alt="Chat Icon" className="w-[16px] h-[16px]" /> Chat
</button>


            </div>
          </div>
        );
      })}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <SubscriptionForm /> {/* Display the subscription form */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinetCards;
