import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      state.filter(contact => contact.includes(action.payload));
    },
  },
});

export const { contactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;