import { log } from "console";
import Profile from "../models/profileModel.js";
import fs from "fs";

// Create Profile
export const createProfile = async (req, res) => {
  const {  firstName, lastName, maritalStatus, dateOfBirth, gender, contactInfo, religiousInfo, profession, familyDetails, partnerPreferences } =
    req.body;
    const userId = req.user.id
    console.log("id " , userId);
    

  try {
    const newProfile = new Profile({
      userId,
      firstName,
      lastName,
      maritalStatus,
      dateOfBirth,
      gender,
      contactInfo: contactInfo,
      religiousInfo: religiousInfo,
      profession: profession,
      familyDetails: familyDetails,
      partnerPreferences: partnerPreferences,
      image: req.file ? req.file.path : null,
    });

    await newProfile.save();
    res.status(201).json({ message: "Profile created successfully", profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log(error);
    
  }
};

// Get All Profiles
export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("userId");
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get Profile by ID
export const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id).populate("userId");
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Profile
export const updateProfile = async (req, res) => {
  const { firstName, lastName, maritalStatus, dateOfBirth, gender, contactInfo, religiousInfo, profession, familyDetails, partnerPreferences } =
    req.body;

  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    if (req.file) {
      // Delete old image if a new one is uploaded
      if (profile.image) fs.unlinkSync(profile.image);
      profile.image = req.file.path;
    }

    profile.firstName = firstName || profile.firstName;
    profile.lastName = lastName || profile.lastName;
    profile.maritalStatus = maritalStatus || profile.maritalStatus;
    profile.dateOfBirth = dateOfBirth || profile.dateOfBirth;
    profile.gender = gender || profile.gender;
    profile.contactInfo = contactInfo ? JSON.parse(contactInfo) : profile.contactInfo;
    profile.religiousInfo = religiousInfo ? JSON.parse(religiousInfo) : profile.religiousInfo;
    profile.profession = profession ? JSON.parse(profession) : profile.profession;
    profile.familyDetails = familyDetails ? JSON.parse(familyDetails) : profile.familyDetails;
    profile.partnerPreferences = partnerPreferences ? JSON.parse(partnerPreferences) : profile.partnerPreferences;

    await profile.save();
    res.status(200).json({ message: "Profile updated successfully", profile });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete Profile
export const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    // if (profile.image) fs.unlinkSync(profile.image); 
    // await profile.remove();
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log(error);
    
  }
};
