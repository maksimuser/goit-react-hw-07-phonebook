import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContacts = createAction('contacts/addContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');

export default { addContacts, deleteContact, changeFilter };
