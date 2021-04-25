import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contacts/contacts-reducer';

const store = configureStore({
  reducer: { contacts },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
