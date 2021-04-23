import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsSuccess,
  fetchContactsError,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [fetchContactsError]: (_, { payload }) => payload,
});

export const contacts = combineReducers({
  items,
  filter,
  error,
});
