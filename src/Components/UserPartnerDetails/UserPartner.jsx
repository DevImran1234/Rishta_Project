import React, { useState } from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Camera } from 'lucide-react'; // Import Camera icon from Lucide React
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'; // Import MUI components
import image from '../../images/img1.jpg';
import ClientFooter from '../ClientFooter/ClientFooter';

const Userpartner = () => {
  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className='text-3xl font-medium text-white'>
            User Create profile
          </h1>
          <p className='text-lg text-white mt-2'>
            (Partner Details)
          </p>
        </div>
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
              <FormControl fullWidth variant="outlined">
                  <InputLabel>Religion</InputLabel>
                  <Select label="Religion">
                    <MenuItem value="Islam">Islam</MenuItem>
                    <MenuItem value="Christianity">Christianity</MenuItem>
                    <MenuItem value="Hinduism">Hinduism</MenuItem>
                    <MenuItem value="Buddhism">Buddhism</MenuItem>
                    <MenuItem value="Sikhism">Sikhism</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Age</InputLabel>
                <Select label="Age">
                    {Array.from({ length: 100 }, (_, i) => i + 1).map(age => (
                    <MenuItem key={age} value={age}>
                        {age}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>

              </Grid>
              {/* Second Row */}
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Caste</InputLabel>
                <Select
                label="Caste"
                >
                <MenuItem value="Awan">Awan</MenuItem>
                <MenuItem value="Baloch">Baloch</MenuItem>
                <MenuItem value="Cheema">Cheema</MenuItem>
                <MenuItem value="Jat">Jat</MenuItem>
                <MenuItem value="Khan">Khan</MenuItem>
                <MenuItem value="Rajput">Rajput</MenuItem>
                <MenuItem value="Syed">Syed</MenuItem>
                <MenuItem value="Tariq">Tariq</MenuItem>
                <MenuItem value="Pathan">Pathan</MenuItem>
                {/* Add more castes as needed */}
                </Select>
            </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Height</InputLabel>
                <Select label="Height">
                    <MenuItem value="150 cm">150 cm</MenuItem>
                    <MenuItem value="155 cm">155 cm</MenuItem>
                    <MenuItem value="160 cm">160 cm</MenuItem>
                    <MenuItem value="165 cm">165 cm</MenuItem>
                    <MenuItem value="170 cm">170 cm</MenuItem>
                    <MenuItem value="175 cm">175 cm</MenuItem>
                    <MenuItem value="180 cm">180 cm</MenuItem>
                    <MenuItem value="185 cm">185 cm</MenuItem>
                    <MenuItem value="190 cm">190 cm</MenuItem>
                    <MenuItem value="195 cm">195 cm</MenuItem>
                    {/* Add more height options as needed */}
                </Select>
                </FormControl>

              </Grid>
              <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
            <InputLabel>Sect</InputLabel>
            <Select
                label="Sect"
            >
                <MenuItem value="Shia">Shia</MenuItem>
                <MenuItem value="Sunni">Sunni</MenuItem>
                <MenuItem value="Ahmadi">Ahmadi</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
                {/* Add more sects as needed */}
            </Select>
            </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Residence</InputLabel>
                <Select label="Residence">
                    <MenuItem value="Urban">Urban</MenuItem>
                    <MenuItem value="Suburban">Suburban</MenuItem>
                    <MenuItem value="Rural">Rural</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                    {/* Add more residence options as needed */}
                </Select>
                </FormControl>

              </Grid>
            </Grid>
          </div>
          <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
           Next
          </button>
        </div>
      </div>
      <ClientFooter/>
    </div>
  );
}

export default Userpartner;
