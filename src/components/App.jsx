import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import React from 'react';
import Notiflix from "notiflix";
import { nanoid } from "nanoid";

import { useSelector,useDispatch } from "react-redux";
import action from "../redux/action/action"

export const App = () =>  {

  const dispatch = useDispatch();
  const loginInputId = nanoid();


  const filterValue = useSelector(state => state.filterValue)
  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter);
  const handelFilter = (e) => {
    return dispatch(action.filterName(e.currentTarget.value))
  } 
  const deleteContacts = (e) => {
    for (let i = 0; i < contacts.length; i++){
        if (e.target.id === contacts[i].id) {
          dispatch(action.deleteContacts(contacts[i].id))
              } 
    }
  } 
  const saveChange = (e) => {
    e.preventDefault()
    for (let i = 0; i < contacts.length; i++){
      if (contacts[i].name === e.target.elements.name.value) {
        return Notiflix.Notify.info(`${e.target.elements.name.value} is already is contacts`);
      }
    }  
    dispatch(action.addContacts({id : loginInputId,name : e.target.elements.name.value , number : e.target.elements.number.value}))

    e.target.reset();
}
  

    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm saveChange={saveChange}/>
        <h2>Contacts</h2>
      <Filter handelFilter={handelFilter} filet= {filterValue} />
      <ContactList  contacts = {contacts} filter= {filter} deleteContacts= {deleteContacts} />
      </div>
    );
  }

