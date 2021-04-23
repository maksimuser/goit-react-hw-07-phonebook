import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contacts } from './contacts/contacts-reducer';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: { contacts },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
