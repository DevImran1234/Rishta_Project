import React, { useEffect, useState } from "react";
import ClientNavbar from "../../Components/ClientNavbar/ClientNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Camera } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import image from "../../images/img1.jpg";
import ClientFooter from "../../Components/ClientFooter/ClientFooter";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  maritalStatus: yup.string().required("Marital status is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
//   contactInfo: yup.object().shape({
//     contactNumber: yup.string().required("Contact number is required"),
//   }),
//   religiousInfo: yup.object().shape({
//     religion: yup.string().required("Religion is required"),
//   }),
//   profession: yup.object().shape({
//     occupation: yup.string().required("Occupation is required"),
//   }),
//   familyDetails: yup.object().shape({
//     familyStatus: yup.string().required("Family status is required"),
//   }),
//   partnerPreferences: yup.object().shape({
//     preferredAge: yup.number().required("Preferred age is required"),
//   }),
});

const UserCreateProfileEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/profile/${id}`);
        const data = response.data;
        setValue("firstName", data.firstName);
        setValue("lastName", data.lastName);
        setValue("maritalStatus", data.maritalStatus || "");
        setValue("dateOfBirth", data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split("T")[0] : "");
        setValue("gender", data.gender || "");
        setValue("contactInfo.contactNumber", data.contactInfo?.contactNumber || "");
        setValue("religiousInfo.religion", data.religiousInfo?.religion || "");
        setValue("profession.occupation", data.profession?.occupation || "");
        setValue("familyDetails.familyStatus", data.familyDetails?.familyStatus || "");
        setValue("partnerPreferences.preferredAge", data.partnerPreferences?.preferredAge || "");

        if (data.profileImage) {
          setProfileImage(data.profileImage);
          setImagePreview(data.profileImage);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      maritalStatus: data.maritalStatus,
      dateOfBirth: new Date(data.dateOfBirth).toISOString(),
      gender: data.gender,
      contactInfo: JSON.stringify(data.contactInfo),
      religiousInfo: JSON.stringify(data.religiousInfo),
      profession: JSON.stringify(data.profession),
      familyDetails: JSON.stringify(data.familyDetails),
      partnerPreferences: JSON.stringify(data.partnerPreferences),
    };

    if (profileImage) {
      payload.profileImage = profileImage;
    }

    try {
      await axios.put(`http://localhost:8000/api/profile/${id}`, payload, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Profile updated successfully");
      navigate(`/UserProfile/${id}`);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-screen mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-8 box-border rounded-lg shadow-md overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-medium text-white">User Edit Profile</h1>
          <p className="text-lg text-white mt-2">(Update Profile Details)</p>
        </div>
        <div className="flex flex-col items-center mt-24 w-full">
          <div className="relative">
            <img
              src={imagePreview || image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 w-full max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inputs for all fields */}
              {[
                { name: "firstName", placeholder: "First Name" },
                { name: "lastName", placeholder: "Last Name" },
                { name: "maritalStatus", placeholder: "Marital Status", type: "select", options: ["single", "married", "divorced", "widowed"] },
                { name: "dateOfBirth", placeholder: "Date of Birth", type: "date" },
                { name: "gender", placeholder: "Gender", type: "select", options: ["male", "female", "other"] },
                { name: "contactInfo.contactNumber", placeholder: "Contact Number" },
                { name: "religiousInfo.religion", placeholder: "Religion" },
                { name: "profession.occupation", placeholder: "Occupation" },
                { name: "familyDetails.familyStatus", placeholder: "Family Status" },
                { name: "partnerPreferences.preferredAge", placeholder: "Preferred Age", type: "number" },
              ].map(({ name, placeholder, type = "text", options = [] }) => (
                <div key={name}>
                  <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                      type === "select" ? (
                        <select
                          {...field}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        >
                          <option value="">{placeholder}</option>
                          {options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          {...field}
                          type={type}
                          placeholder={placeholder}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      )
                    )}
                  />
                  {errors[name] && <p className="text-red-600 text-sm">{errors[name]?.message}</p>}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="mt-6 bg-pink-700 text-white px-6 py-3 rounded-md hover:bg-pink-600"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default UserCreateProfileEdit;
