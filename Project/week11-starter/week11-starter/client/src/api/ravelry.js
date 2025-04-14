import axios from 'axios';

// Set up the Ravelry API instance with authentication headers
const ravelryApi = axios.create({
  baseURL: 'https://api.ravelry.com',  // Ravelry API base URL
  headers: {
    // Basic Auth for Ravelry API
    'Authorization': `Basic ${btoa(import.meta.env.VITE_RAVELRY_USERNAME + ':' + import.meta.env.VITE_RAVELRY_PASSWORD)}`
  }
});

// Fetch current user info from Ravelry
export const getCurrentUser = () => ravelryApi.get('/current_user.json');

// Search for yarns on Ravelry
export const searchYarns = (query) =>
  ravelryApi.get('/yarns/search.json', { params: { query } });

// Search for patterns on Ravelry
export const searchPatterns = (query) =>
  ravelryApi.get('/patterns/search.json', { params: { query } });
