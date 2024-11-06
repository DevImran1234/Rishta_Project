import axios from 'axios';
export const handleuserSignup = async (data) => {
  try {
    const response = await axios.post('http://localhost:8000/api/users/register', {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role, 
    });

    console.log('Signup successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error.response ? error.response.data : error.message);
    throw error;
  }
};
