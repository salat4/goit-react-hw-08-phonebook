// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import itemsReducer from './action/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: itemsReducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });
// export const persistor = persistStore(store);
// export default store;




import { configureStore } from '@reduxjs/toolkit'
import {contactsApi}from './ContactsSlice'
export const store = configureStore({
  reducer:{
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware(),
    contactsApi.middleware
  ]
})