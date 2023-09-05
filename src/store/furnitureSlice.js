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

// export const addFurniture = createAsyncThunk(
//   'post/furnitures',
//   async (furnitureData) => {
//     console.log(furnitureData);
//     const furniture = await axios.post(
//       "http://[::1]:3001/api/v1/furnitures",
//       furnitureData,
//       {
//         headers: {
//           "content-type": "application/json",
//           "authorization": authToken,
//         },
//       }
//     );

//     console.log(furniture.data);
//     // return furniture.data;
//   }
// );

// export const addFurniture = createAsyncThunk(
//   'post/furnitures',
//   async (furnitureData, { rejectWithValue }) => {
//     try {
//       const furniture = await axios.post(
//         'http://[::1]:3001/api/v1/furnitures',
//         furnitureData,
//         {
//           headers: {
//             'content-type': 'application/json',
//             authorization: authToken,
//           },
//         }
//       );

//       return furniture.data;
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with an error status
//         console.log (rejectWithValue(error.response.data));
//       } else if (error.request) {
//         // The request was made but no response was received
//         return rejectWithValue('No response received from the server.');
//       } else {
//         // Something happened in setting up the request
//         return rejectWithValue('Error setting up the request.');
//       }
//     }
//   }
// );

const apiUrl = 'http://[::1]:3001/api/v1/furnitures'; // Replace with your actual API URL

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

    try {
      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse the response body as JSON
      console.log('Response:', data);

      // Handle the data or return it if needed
      return data;
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
      throw error; // Rethrow the error to be caught by the Redux action
    }
  }
);




export const initialState = {
  furnitures: [],
};

const furnitureSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFurnitures.fulfilled, (state, { payload }) => {
      state.furnitures.push(payload);
    });
  },
  // extraReducers: (builder) => {
  //   builder.addCase(addFurniture.fulfilled, (state, { payload }) => {
  //     // state.furnitures.push(payload);
  //   });
  // },
});

export default furnitureSlice;
