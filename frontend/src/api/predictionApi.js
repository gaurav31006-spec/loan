import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000'}/predict`;

export const predictLoanDefault = async (data, model = 'all') => {
  try {
    const response = await axios.post(API_URL, { ...data, model });
    return response.data;
  } catch (error) {
    throw error;
  }
};
