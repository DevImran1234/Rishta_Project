'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Camera } from 'lucide-react';
import { Avatar, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';

// Define the validation schema
const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  maritalStatus: yup.string().required('Marital status is required'),
  dateOfBirth: yup.date().nullable().required('Date of birth is required')
    .typeError('Invalid date format'),
  gender: yup.string().required('Gender is required'),
  contactNumber: yup.string().required('Contact number is required'),
}).required();

const ClientProfile = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      dateOfBirth: null, // Set default value for dateOfBirth
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ClientNavbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-4 md:p-8 lg:p-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-pink-700 py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl sm:text-3xl font-medium text-white text-center">
                Create Your Client Profile
              </h1>
              <p className="text-lg text-white mt-2 text-center">(Basics)</p>
            </div>
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col items-center mb-8">
                {/* Circular Container */}
                <div className="relative">
                  <Avatar
                    src="/placeholder.svg?height=128&width=128"
                    alt="Profile"
                    sx={{
                      width: { xs: 96, sm: 128 },
                      height: { xs: 96, sm: 128 },
                    }}
                  />
                  {/* Camera Icon */}
                  <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg cursor-pointer">
                    <Camera className="w-4 h-4 sm:w-6 sm:h-6 text-white " />
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=""
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
                      defaultValue=""
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
                    <Controller
                      name="maritalStatus"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <FormControl fullWidth variant="outlined" error={!!errors.maritalStatus}>
                          <InputLabel>Marital Status</InputLabel>
                          <Select {...field} label="Marital Status">
                            <MenuItem value="Single">Single</MenuItem>
                            <MenuItem value="Married">Married</MenuItem>
                          </Select>
                          {errors.maritalStatus && (
                            <Typography color="error" variant="body2">
                              {errors.maritalStatus.message}
                            </Typography>
                          )}
                        </FormControl>
                      )}
                    />
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
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          variant="outlined"
                          error={!!errors.dateOfBirth}
                          helperText={errors.dateOfBirth?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="gender"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <FormControl fullWidth variant="outlined" error={!!errors.gender}>
                          <InputLabel>Gender</InputLabel>
                          <Select {...field} label="Gender">
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                          </Select>
                          {errors.gender && (
                            <Typography color="error" variant="body2">
                              {errors.gender.message}
                            </Typography>
                          )}
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="contactNumber"
                      control={control}
                      defaultValue=""
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
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default ClientProfile;
