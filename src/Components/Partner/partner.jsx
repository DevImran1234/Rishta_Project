import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Camera } from 'lucide-react'; // Import Camera icon from Lucide React
import { FormControl, Grid, InputLabel, MenuItem, Select, Button, Typography } from '@mui/material'; // Import MUI components
import image from '../../images/img1.jpg';
import ClientFooter from '../ClientFooter/ClientFooter';

const Partner = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle form submission logic here
  };

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className='text-3xl font-medium text-white'>
            Create Your Client Profile
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
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 w-full max-w-2xl">
            <Grid container spacing={2}>
              {/* First Row */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Religion</InputLabel>
                  <Controller
                    name="religion"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Religion is required' }}
                    render={({ field }) => (
                      <Select label="Religion" {...field}>
                        <MenuItem value="Islam">Islam</MenuItem>
                        <MenuItem value="Christianity">Christianity</MenuItem>
                        <MenuItem value="Hinduism">Hinduism</MenuItem>
                        <MenuItem value="Buddhism">Buddhism</MenuItem>
                        <MenuItem value="Sikhism">Sikhism</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.religion && (
                    <Typography variant="caption" color="error">
                      {errors.religion.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Age</InputLabel>
                  <Controller
                    name="age"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Age is required' }}
                    render={({ field }) => (
                      <Select label="Age" {...field}>
                        {Array.from({ length: 100 }, (_, i) => i + 1).map(age => (
                          <MenuItem key={age} value={age}>
                            {age}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.age && (
                    <Typography variant="caption" color="error">
                      {errors.age.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              {/* Second Row */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Caste</InputLabel>
                  <Controller
                    name="caste"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Caste is required' }}
                    render={({ field }) => (
                      <Select label="Caste" {...field}>
                        <MenuItem value="Awan">Awan</MenuItem>
                        <MenuItem value="Baloch">Baloch</MenuItem>
                        <MenuItem value="Cheema">Cheema</MenuItem>
                        <MenuItem value="Jat">Jat</MenuItem>
                        <MenuItem value="Khan">Khan</MenuItem>
                        <MenuItem value="Rajput">Rajput</MenuItem>
                        <MenuItem value="Syed">Syed</MenuItem>
                        <MenuItem value="Tariq">Tariq</MenuItem>
                        <MenuItem value="Pathan">Pathan</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.caste && (
                    <Typography variant="caption" color="error">
                      {errors.caste.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Height</InputLabel>
                  <Controller
                    name="height"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Height is required' }}
                    render={({ field }) => (
                      <Select label="Height" {...field}>
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
                      </Select>
                    )}
                  />
                  {errors.height && (
                    <Typography variant="caption" color="error">
                      {errors.height.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              {/* Third Row */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Sect</InputLabel>
                  <Controller
                    name="sect"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Sect is required' }}
                    render={({ field }) => (
                      <Select label="Sect" {...field}>
                        <MenuItem value="Shia">Shia</MenuItem>
                        <MenuItem value="Sunni">Sunni</MenuItem>
                        <MenuItem value="Ahmadi">Ahmadi</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.sect && (
                    <Typography variant="caption" color="error">
                      {errors.sect.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Residence</InputLabel>
                  <Controller
                    name="residence"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Residence is required' }}
                    render={({ field }) => (
                      <Select label="Residence" {...field}>
                        <MenuItem value="Urban">Urban</MenuItem>
                        <MenuItem value="Suburban">Suburban</MenuItem>
                        <MenuItem value="Rural">Rural</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.residence && (
                    <Typography variant="caption" color="error">
                      {errors.residence.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
           Next
          </button>
          </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Partner;
