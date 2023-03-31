import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./contactsFilter";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts']
}
const persistedReducer = persistReducer(persistConfig, contactsReducer)


export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
  },
});

export let persistor = persistStore(store)



