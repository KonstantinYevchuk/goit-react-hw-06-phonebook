import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const constacsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.some(contact => contact.name === action.payload.name)
        ? alert(`${action.payload.name}, Contact with such name is already exists!`)
        : state.push(action.payload);
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
        return state.filter(contact => contact.id !== action.payload)   
        // const index = state.findIndex(contact => contact.id === action.payload);
        // state.splice(index, 1);  
    },
    filterContact(state, action) {
        return state.filter(contact => contact.name.toLowerCase().includes(action.payload)) 
            // contact.name.toLowerCase().includes(normalizedContacts));
    }
  },
});

export const { addContact, deleteContact, filterContact } = constacsSlice.actions;
export const contactsReducer = constacsSlice.reducer;