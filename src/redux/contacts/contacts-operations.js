import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const result = await axios.get(
        'https://611a211bcbf1b30017eb54f5.mockapi.io/api/v1/contacts',
      );
      return result.data;
    } catch (error) {
      toast.error('Something went wrong');
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const result = await axios.post(
        'https://611a211bcbf1b30017eb54f5.mockapi.io/api/v1/contacts',
        contact,
      );
      return result.data;
    } catch (error) {
      toast.error('Something went wrong');
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(
        `https://611a211bcbf1b30017eb54f5.mockapi.io/api/v1/contacts/${id}`,
      );
      return id;
    } catch (error) {
      toast.error('Something went wrong');
    }
  },
);
