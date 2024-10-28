import React from 'react';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
// import ClientFooter from './../Components/ClientFooter/ClientFooter';
import { Camera, Plus } from 'lucide-react'; // Import Camera icon from Lucide React
import { Grid, TextField, Typography } from '@mui/material'; // Import MUI components
import image from '../../images/img1.jpg';
import { Link } from 'react-router-dom';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';
const Profile = () => {
  return (
    <div>
      <ClientNavbar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex items-center justify-center">
          <h1 className='text-3xl font-medium text-white'>
            Profile
          </h1>
        </div>
        
        {/* Profile Image Section */}
        <div className="flex flex-col items-center mt-24">
          {/* Circular Container */}
          <div className="relative">
            <img
              src={image} // Replace with your image path or URL
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
            <Grid container spacing={2}>
              {/* First Row */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Marriage Counsaltant name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact number"
                  variant="outlined"
                />
              </Grid>
              {/* Second Row */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company address"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <Link
          to="/add-client"
          className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300"
        >
            Save
        </Link>
      </div>
      <ClientFooter />
    </div>
  );
}

export default Profile;
