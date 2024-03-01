import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'dark',
  },
  reducers: { 
    changeTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    },
  }
});


export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;