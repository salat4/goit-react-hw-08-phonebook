import { configureStore } from '@reduxjs/toolkit'
import {authApi,tokenSlice,userSlice,contactsApi}from './ContactsSlice'
export const store = configureStore({
  reducer:{
    [contactsApi.reducerPath]:contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tokenSlice.name]:tokenSlice.reducer,
    [userSlice.name]:userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware(),
    authApi.middleware,
    contactsApi.middleware,
  ],
})