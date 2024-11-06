export const registerConsaltant = async (formData) => {
    try {
      const payload = {
        ...formData,         
        marriageConsultant: true,  
      };
  
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        return await response.json(); 
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong!');
      }
    } catch (error) {
      throw new Error(error.message || 'An error occurred while submitting the form.');
    }
  };
  