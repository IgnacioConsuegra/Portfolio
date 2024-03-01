import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import languageReducer from '../features/language/languageSlice'


export default configureStore({ 
  reducer: {
    language: languageReducer,
    theme: themeReducer,
  }
})