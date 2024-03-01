import {createSlice} from '@reduxjs/toolkit';
import languagesJSON from './languages.json'

export const languageSlice=  createSlice({
  name: 'language',
  initialState: {
    currentLanguage: 'en',
    languageText: languagesJSON['en'],
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
      state.languageText = languagesJSON[action.payload];
      console.log("Changed language" + JSON.stringify(state.languageText))
    },
  }
})


export const {changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;