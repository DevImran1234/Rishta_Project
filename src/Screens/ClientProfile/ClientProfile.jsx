import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Camera } from 'lucide-react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, Button } from '@mui/material';
import image from '../../images/img1.jpg';
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
      dateOfBirth: null // Set default value for dateOfBirth
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[15vh] flex flex-col items-center justify-center p-4">
          <h1 className='text-3xl font-medium text-white'>
            Create Your Client Profile
          </h1>
          <p className='text-lg text-white mt-2'>
            (Basics)
          </p>
        </div>
        <div className="flex flex-col items-center mt-24">
          {/* Circular Container */}
          <div className="relative">
            <img
              src={image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-12 w-full max-w-2xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                {/* First Row */}
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
                {/* Second Row */}
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="maritalStatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <FormControl fullWidth variant="outlined" error={!!errors.maritalStatus}>
                        <InputLabel>Marital Status</InputLabel>
                        <Select
                          {...field}
                          label="Marital Status"
                        >
                          <MenuItem value="Single">Single</MenuItem>
                          <MenuItem value="Married">Married</MenuItem>
                        </Select>
                        {errors.maritalStatus && <Typography color="error" variant="body2">{errors.maritalStatus.message}</Typography>}
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
                        <Select
                          {...field}
                          label="Gender"
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                        {errors.gender && <Typography color="error" variant="body2">{errors.gender.message}</Typography>}
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
              <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
           Next
          </button>
            </form>
          </div>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
}

export default ClientProfile;
