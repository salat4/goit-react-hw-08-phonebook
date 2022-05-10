import { configureStore } from "@reduxjs/toolkit";
import { createSlice  } from "@reduxjs/toolkit";


const LS_KEY = "reader_contact";

const contactsSlice = createSlice({
    name:'contacts',
    initialState:()=>{
        const saved = localStorage.getItem(LS_KEY);
        const initialValue = JSON.parse(saved);
        return initialValue || []
      },
      reducers: {
          add(state, action){
              state.push(action.payload)
          },
          remove(state,action){
              return state.filter(item => item.id !== action.payload)
          },
        //   filter(state,action){
        //     return action.payload.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
        //   }
         
      }
});
const filterSlice = createSlice({
    name : 'filter',
    initialState:'',
    reducers:{
        filter(state,action){
            state = `${action.payload}` 
            // state = state + action.payload
          }
    }
})



// console.log(contactsSlice)
export const { add  , remove } = contactsSlice.actions;
export const {filter} = filterSlice.actions;

export const store = configureStore({
    reducer:{
        contacts: contactsSlice.reducer,
        filterValue: filterSlice.reducer,
    },
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())