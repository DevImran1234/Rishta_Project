import axios from 'axios';

export const handleSignup = async (data) => {
  try {
    const response = await axios.post('http://localhost:8000/api/users/register', {
      name: data.username,
      email: data.email,
      password: data.password,
      // role: "guest"
    });
    console.log('Signup successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error.response ? error.response.data : error.message);
    throw error; 
  }
};
