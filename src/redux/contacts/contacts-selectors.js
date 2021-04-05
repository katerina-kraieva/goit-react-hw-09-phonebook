import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;

const getContacts = state => state.contacts.contacts;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelector = {
  getLoading,
  getError,
  getContacts,
  getFilter,
  getVisibleContacts,
};

export default contactsSelector;