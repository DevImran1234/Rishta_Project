import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Camera } from 'lucide-react'; 
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'; 
// import image from '../../images/img1.jpg';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


// Define the validation schema using Yup
const schema = yup.object().shape({
  
  religion: yup.string().required('Religion is required'),
  age: yup.number().required('Age is required').min(1, 'Age must be at least 1'),
  caste: yup.string().required('Caste is required'),
  height: yup.string().required('Height is required'),
  sect: yup.string().required('Sect is required'),
  residence: yup.string().required('Residence is required'),
});

const Userpartner = () => {
  const navigate = useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    const token = localStorage.getItem("usertoken"); 
    
    if (!token) {
      console.error('No token found in localStorage');
      return;
    }
  
    const payload = {
      ...formData,  
      religion: data.religion, 
      age: data.age,
      caste: data.caste,
      height: data.height,
      sect: data.sect,
      residence: data.residence
    };
    
    const headers = {
      Authorization: `Bearer ${token}`, 
    };
  
    try {
      const response = await axios.post('http://localhost:8000/api/profile', payload, { headers });
  
      console.log('Profile saved successfully:', response.data);
      navigate("/users-side")
    } catch (error) {
      console.error('Error saving profile:', error.response?.data || error.message);
    }
  };
  
  
  const location = useLocation();
  const formData = location.state?.formData;

  useEffect(() => {
    if (formData) {
      console.log("Received User Data in UserProfessional:", formData);
    }
  }, [formData]);

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1100px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
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
              src="https://via.placeholder.com/150" // Replace with your image path or URL
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
                    render={({ field }) => (
                      <Select {...field} label="Religion">
                        <MenuItem value="Islam">Islam</MenuItem>
                        <MenuItem value="Christianity">Christianity</MenuItem>
                        <MenuItem value="Hinduism">Hinduism</MenuItem>
                        <MenuItem value="Buddhism">Buddhism</MenuItem>
                        <MenuItem value="Sikhism">Sikhism</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.religion && <p className="text-red-500 text-sm mt-1">{errors.religion.message}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Age</InputLabel>
                  <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Age">
                        {Array.from({ length: 100 }, (_, i) => i + 1).map(age => (
                          <MenuItem key={age} value={age}>
                            {age}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                </FormControl>
              </Grid>
              {/* Second Row */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Caste</InputLabel>
                  <Controller
                    name="caste"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Caste">
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
                    )}
                  />
                  {errors.caste && <p className="text-red-500 text-sm mt-1">{errors.caste.message}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Height</InputLabel>
                  <Controller
                    name="height"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Height">
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
                    )}
                  />
                  {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Sect</InputLabel>
                  <Controller
                    name="sect"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Sect">
                        <MenuItem value="Shia">Shia</MenuItem>
                        <MenuItem value="Sunni">Sunni</MenuItem>
                        <MenuItem value="Ahmadi">Ahmadi</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                        {/* Add more sects as needed */}
                      </Select>
                    )}
                  />
                  {errors.sect && <p className="text-red-500 text-sm mt-1">{errors.sect.message}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Residence</InputLabel>
                  <Controller
                    name="residence"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Residence">
                        <MenuItem value="Urban">Urban</MenuItem>
                        <MenuItem value="Suburban">Suburban</MenuItem>
                        <MenuItem value="Rural">Rural</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                        {/* Add more residence options as needed */}
                      </Select>
                    )}
                  />
                  {errors.residence && <p className="text-red-500 text-sm mt-1">{errors.residence.message}</p>}
                </FormControl>
              </Grid>
            </Grid>
            <button type="submit" className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
              Save
            </button>
          </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
}

export default Userpartner;
