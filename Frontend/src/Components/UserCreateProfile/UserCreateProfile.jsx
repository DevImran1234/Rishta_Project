import React, { useState } from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Camera } from 'lucide-react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import image from '../../images/img1.jpg'; // Default image
import ClientFooter from '../ClientFooter/ClientFooter';
import axios from 'axios';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  maritalStatus: yup.string().required('Marital status is required'),
  dateOfBirth: yup.date().required('Date of birth is required'),
  gender: yup.string().required('Gender is required'),
  contactNumber: yup.string(),
});

const UserCreateProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('maritalStatus', data.maritalStatus);
      formData.append('dateOfBirth', data.dateOfBirth);
      formData.append('gender', data.gender);
      formData.append('contactInfo', JSON.stringify({ contactNumber: data.contactNumber }));
      if (profileImage) {
        formData.append('image', profileImage);
      }
      const response = await axios.post('http://localhost:8000/api/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Profile created successfully:', response.data);
    } catch (error) {
      console.error('Error creating profile:', error);
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
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-8 box-border rounded-lg shadow-md overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-medium text-white">User Create Profile</h1>
          <p className="text-lg text-white mt-2">(Basics)</p>
        </div>
        <div className="flex flex-col items-center mt-24 w-full">
          {/* Circular Image with Camera Icon */}
          <div className="relative">
            <img
              src={profileImage ? URL.createObjectURL(profileImage) : image}
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

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 w-full max-w-3xl">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" error={!!errors.maritalStatus}>
                  <InputLabel>Marital Status</InputLabel>
                  <Controller
                    name="maritalStatus"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Marital Status">
                        <MenuItem value="Single">Single</MenuItem>
                        <MenuItem value="Married">Married</MenuItem>
                      </Select>
                    )}
                  />
                  <Typography variant="body2" color="error">
                    {errors.maritalStatus?.message}
                  </Typography>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Date of Birth"
                      variant="outlined"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.dateOfBirth}
                      helperText={errors.dateOfBirth?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" error={!!errors.gender}>
                  <InputLabel>Gender</InputLabel>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Gender">
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    )}
                  />
                  <Typography variant="body2" color="error">
                    {errors.gender?.message}
                  </Typography>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="contactNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Contact Number"
                      variant="outlined"
                      error={!!errors.contactNumber}
                      helperText={errors.contactNumber?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg mt-8 transition-colors duration-300"
            >
              Next
            </button>
          </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default UserCreateProfile;
