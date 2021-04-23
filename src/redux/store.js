import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
