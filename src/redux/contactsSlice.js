import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
      reducer(state, action) {
        const isContactInList = state.some(
          ({ name: contactName }) =>
            contactName.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()
        );

        if (isContactInList) {
          alert(`${action.payload.name} is already in contacts`);
        } else {
          state.push(action.payload);
          //   state.name = action.payload.name.trim();
          //   state.number = action.payload.number;
        }
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
