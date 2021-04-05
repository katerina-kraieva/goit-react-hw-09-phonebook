import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
  clearError,
} from './contacts-action';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, action) => [action.payload, ...state],
  [deleteContactsSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const loading = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [addContactsError]: (_, { payload }) => payload,
  [fetchContactsError]: (_, { payload }) => payload,
  [deleteContactsError]: (_, { payload }) => payload,
  [clearError]: () => null,
});
const contactsReducer = combineReducers({
  contacts,
  filter,
  loading,
  error,
});
export default contactsReducer;