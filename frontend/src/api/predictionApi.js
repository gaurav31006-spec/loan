import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL || 'https://api-loan-h4g6.onrender.com'}/predict`;

export const predictLoanDefault = async (data, model = 'all') => {
  try {
    const response = await axios.post(API_URL, { ...data, model });
    return response.data;
  } catch (error) {
    throw error;
  }
};
