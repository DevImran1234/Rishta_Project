import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Camera, Edit } from "lucide-react";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import ClientFooter from "../ClientFooter/ClientFooter";

const UserProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const placeholderImage = "https://via.placeholder.com/150";

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/profile/${id}`);
      setProfile(response.data);
    } catch (err) {
      setError("Error fetching profile");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [id]);

  const handleEditClick = () => {
    navigate(`/UserEditProfile/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ClientNavbar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-start w-full max-w-[1100px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-medium text-white">Profile</h1>
        </div>

        {/* Profile Image with Upload Icon */}
        <div className="relative mt-[12vh] flex flex-col md:flex-row items-start w-full">
          <div className="relative flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img
              src={profile?.image || placeholderImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg transform translate-x-2 translate-y-2">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Profile Details */}
          <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2F82A0B2] flex items-center justify-between">
              User Details
              <Edit className="w-5 h-5 text-[#2F82A0B2] cursor-pointer" onClick={handleEditClick} />
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Basic Details */}
              <div>
                <h6 className="font-semibold">Basic Details</h6>
                <p className="font-normal text-black">First Name: {profile?.firstName}</p>
                <p className="font-normal text-black">Last Name: {profile?.lastName}</p>
                <p className="font-normal text-black">Marital Status: {profile?.maritalStatus}</p>
                <p className="font-normal text-black">Date Of Birth: {new Date(profile?.dateOfBirth).toLocaleDateString()}</p>
                <p className="font-normal text-black">Gender: {profile?.gender}</p>
                <p className="font-normal text-black">
                  Contact Number: {profile?.contactInfo?.contactNumber || "N/A"}
                </p>
              </div>

              {/* Religious Information */}
              <div>
                <h6 className="font-semibold">Religious Information</h6>
                <p className="font-normal text-black">Religion: {profile?.religiousInfo?.religion || "N/A"}</p>
              </div>

              {/* Professional Information */}
              <div>
                <h6 className="font-semibold">Professional Information</h6>
                <p className="font-normal text-black">
                  Occupation: {profile?.profession?.occupation || "N/A"}
                </p>
              </div>

              {/* Family Information */}
              <div>
                <h6 className="font-semibold">Family Information</h6>
                <p className="font-normal text-black">
                  Family Status: {profile?.familyDetails?.familyStatus || "N/A"}
                </p>
              </div>

              {/* Partner Preferences */}
              <div>
                <h6 className="font-semibold">Partner Preferences</h6>
                <p className="font-normal text-black">
                  Preferred Age: {profile?.partnerPreferences?.preferredAge || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-2 right-8 transition-colors duration-300 z-50">
          Save
        </button> */}
      </div>
      <ClientFooter />
    </div>
  );
};

export default UserProfile;
