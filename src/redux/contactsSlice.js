import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const constacsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({name, number}) {
        return {
          payload: {
            name,
            id: nanoid(),
            number,
          },
        };
      },
    },
    deleteContact(state, action) {   
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);  
    },
  },
});

export const { addContact, deleteContact } = constacsSlice.actions;
export const contactsReducer = constacsSlice.reducer;