
import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContacts = createAction('contacts/add', contacts  => {
    return {
        payload: {
            id: nanoid(),
            name: contacts.name,
            number: contacts.number
        },
    };
});

const filterName = createAction('contacts/filterName');

const deleteContacts = createAction('contacts/delete');

// eslint-disable-next-line import/no-anonymous-default-export
export default {addContacts, deleteContacts, filterName};