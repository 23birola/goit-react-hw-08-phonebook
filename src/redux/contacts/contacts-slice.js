import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const ItemsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        name: 'yfkyfkyfk',
        number: '2695945949',
        id: '15',
      },
    ],
    filter: '',
    status: null,
    error: null,
  },

  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.error = null;
    },
    [fetchContacts.pending]: (state, _) => {
      state.status = 'loading';
    },
    [fetchContacts.rejected]: (state, _) => {
      state.status = null;
      state.error = 'Error';
    },

    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.status = null;
      state.error = null;
    },
    [addContact.pending]: (state, _) => {
      state.status = 'loading';
      state.error = null;
    },
    [addContact.rejected]: (state, _) => {
      state.status = null;
      state.error = 'Error';
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

export const { filterContacts } = ItemsSlice.actions;
export default ItemsSlice.reducer;
