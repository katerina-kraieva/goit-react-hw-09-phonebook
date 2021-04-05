import axios from 'axios';
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
} from './contacts-action';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.massage)));
};

export const addContact = (nam, tel) => dispatch => {
  const contact = {
    name: nam,
    number: tel,
  };

  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error.massage)));
};

export const deleteContacts = Id => dispatch => {
  dispatch(deleteContactsRequest());
  console.log(Id);
  axios
    .delete(`/contacts/${Id}`)
    .then(() => dispatch(deleteContactsSuccess(Id)))
    .catch(error => dispatch(deleteContactsError(error.massage)));
};
const contactsOperations = { fetchContacts, addContact, deleteContacts };

export default contactsOperations;