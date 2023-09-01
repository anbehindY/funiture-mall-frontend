import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogin = createAsyncThunk('post/user', async () => {
  const userResponse = await axios.post('http://localhost:3000/login', user);
  //   return user.data;
  console.log(userResponse);
});

const furnitureSlice = createSlice({
  name: 'user',
  user: '',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export default userSlice;
// export const { singleFurniture } = furnitureSlice.actions;
