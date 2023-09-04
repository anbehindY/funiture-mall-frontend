import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getFurnitures = createAsyncThunk('furniture/getFurnitures', async () => {
  axios.defaults.withCredentials = true;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post.Accept = 'application/json';
  try {
    const response = await axios.get('http://localhost:3001/furnitures', { withCredentials: true });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export default getFurnitures;
