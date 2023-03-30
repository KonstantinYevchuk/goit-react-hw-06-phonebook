import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsInitialState = [];
const STORAGE = "contact";
const getSavedContacts = () => {
  const savedContacts = localStorage.getItem(STORAGE);
    if(savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts)
      return parsedContacts
    }
    return []
}
const constacsSlice = createSlice({
  name: "contacts",
  initialState: getSavedContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.some(contact => contact.name === action.payload.name)
        ? alert(`${action.payload.name}, Contact with such name is already exists!`)
        : state.push(action.payload);
        localStorage.setItem(STORAGE, JSON.stringify(state))
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
 
  },
});


export const { addContact, deleteContact, filterContact } = constacsSlice.actions;
export const contactsReducer = constacsSlice.reducer;

