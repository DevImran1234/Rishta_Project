import Profile from "../models/profileModel.js";

export const createProfile = async (req, res) => {
  const {
    firstName,
    lastName,
    maritalStatus,
    dateOfBirth,
    gender,
    contactInfo,
    image,
    religiousInfo,
    profession,
    familyDetails,
    partnerPreferences,
  } = req.body;

  try {
    const newProfile = new Profile({
      userId: req.user.id, 
      firstName,
      lastName,
      maritalStatus,
      dateOfBirth,
      gender,
      contactInfo,
      image,
      religiousInfo,
      profession,
      familyDetails,
      partnerPreferences,
    });

    await newProfile.save();
    res
      .status(201)
      .json({ message: "Profile created successfully", profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
