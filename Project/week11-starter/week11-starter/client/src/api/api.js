// src/api/api.js
import axios from 'axios';

// Make sure the API_URL is correctly set in the .env file
const API_URL = import.meta.env.VITE_API_URL;

// Add Knit function
export const addKnit = async (knitData) => {
  const basicAuth = 'Basic ' + btoa(`${import.meta.env.VITE_RAVELRY_USERNAME}:${import.meta.env.VITE_RAVELRY_PASSWORD}`);

  return await axios.post(`${API_URL}/knits`, knitData, {
    headers: {
      Authorization: basicAuth,
      'Content-Type': 'application/json',
    },
  });
};

// Other possible functions (login, etc.)
export const login = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};
