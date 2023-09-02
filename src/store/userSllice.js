import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogin = createAsyncThunk('post/user', async (user) => {
  const userResponse = await axios.post('http://localhost:3001/login', user);
  //   return user.data;
  console.log(userResponse.data);
});

const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {},
    // extraReducers: (builder) => {
    //   builder.addCase(userResponse.fulfilled, (state, { payload }) => {
    //     state.user = payload;
    //   });
    // },
});

export default userSlice;
// export const { singleFurniture } = furnitureSlice.actions;
