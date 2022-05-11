
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './action';

const items = createReducer([], {
    [actions.addContacts]: (state, { payload }) => [...state, payload],
    [actions.deleteContacts]: (state, { payload }) => {
        return state.filter(({ id }) => id !== payload)
    }
});

const filter = createReducer('', {
    [actions.filterName]: (state, { payload }) => payload
});


       


export default combineReducers({
    items,
    filter,
})