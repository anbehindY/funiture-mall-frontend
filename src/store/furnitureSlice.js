import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken = localStorage.getItem('token');

export const getFurnitures = createAsyncThunk('get/furnitures', async () => {
  const response = await axios.get('http://[::1]:3001/api/v1/furnitures', {
    headers: {
      'content-type': 'application/json',
      authorization: authToken,
    },
  });
  const furnitures = response.data;
  return furnitures;
});

export const getSingleFurniture = createAsyncThunk(
  'get/furnitures',
  async (id) => {
    const furniture = await axios.get(
      `http://[::1]:3001/api/v1/furnitures/${id}`,
    );
    return furniture.data;
  },
);

export const addFurniture = createAsyncThunk(
  'post/furnitures',
  async (furnitureData) => {
    const authToken = 'your-auth-token'; // Replace with your actual authentication token
    const apiUrl = 'http://[::1]:3001/api/v1/furnitures'; // Replace with your API URL

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`, // Include your authentication token here
      },
      body: JSON.stringify(furnitureData), // Convert the data to JSON format
    };

    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  },
);

export const initialState = {
  furnitures: [],
  message: '',
};

const furnitureSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFurnitures.pending, (state) => {
      state.message = 'Loading...';
    }).addCase(getFurnitures.fulfilled, (state, { payload }) => {
      state.furnitures.push(payload);
      state.message = 'loaded';
    }).addCase(getFurnitures.rejected, (state, { payload }) => {
      state.furnitures.push(payload);
      state.message = 'Failed';
    });
  },
});

export default furnitureSlice.reducer;
