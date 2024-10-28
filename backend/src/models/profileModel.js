import mongoose from "mongoose";

const { Schema, model } = mongoose;

const profileSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    maritalStatus: {
      type: String,
      enum: ["single", "married", "divorced", "widowed"],
      required: true,
    },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    contactInfo: contactInfoSchema,
    image: { type: String },
    religiousInfo: { type: Schema.Types.Mixed },
    profession: { type: Schema.Types.Mixed },
    familyDetails: { type: Schema.Types.Mixed },
    partnerPreferences: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

const Profile = model("Profile", profileSchema);

export default Profile;
