import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from '../contacts/contacts-slice';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
