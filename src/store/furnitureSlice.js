import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFurnitures = createAsyncThunk('get/furnitures', async () => {
  const furnitures = await axios.get('http://[::1]:3001/api/v1/furnitures', {
    headers: {
      'content-type': 'application/json',
      'authorization': localStorage.getItem('token'),
    },
  });
  return furnitures.data;
});

// export const getSingleFurniture = createAsyncThunk(
//   'get/furnitures',
//   async () => {
//     const furniture = await axios.get(
//       `http://[::1]:3001/api/v1/furnitures/${id}`
//     );
//     // return furnitures.data;
//     console.log(furniture);
//   }
// );

export const initialState = {
  furnitures: [],
};

const furnitureSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {
    // singleFurniture: (state, { payload }) => {
    //   console.log(payload);
    //   console.log(state.furnitures);
    //   // const newState = state.furnitures.map((furniture) => {
    //   //   if (furniture.id === payload) {
    //   //     return { ...furniture };
    //   //   }
    //   //   return furniture;
    //   // });
    //   // state.furnitures = newState;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getFurnitures.fulfilled, (state, { payload }) => {
      state.furnitures.push(payload);
    });
  },
});

export default furnitureSlice;
// export const { singleFurniture } = furnitureSlice.actions;
