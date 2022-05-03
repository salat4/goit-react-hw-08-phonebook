import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import React, { useState , useEffect } from 'react';
import Notiflix from "notiflix";
import { nanoid } from "nanoid";

export const App = () =>  {
  const loginInputId = nanoid();
  const LS_KEY = "reader_contact";
  const [contacts, setContacts] = useState(()=>{
    const saved = localStorage.getItem(LS_KEY);
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [filter, setFilter] = useState("")

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  },[contacts])
  const saveChange = (e) => {
    e.preventDefault()
    for (let i = 0; i < contacts.length; i++){
      if (contacts[i].name === e.target.elements.name.value) {
        return Notiflix.Notify.info(`${e.target.elements.name.value} is already is contacts`);
      }
    }  
    setContacts([...contacts,{id : loginInputId,name : e.target.elements.name.value , number : e.target.elements.number.value}])
}
  const handelFilter = (e) => {
  setFilter(e.target.value)
} 
  const deleteContacts = (e) => {
    let deleteCont = [...contacts]
    for (let i = 0; i < contacts.length; i++){
        if (e.target.id === contacts[i].id) {
         deleteCont.splice(i, 1);
      } 
    }
    setContacts(deleteCont)
  }  
  
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm saveChange ={saveChange}/>
        <h2>Contacts</h2>
      <Filter filter={filter} handelFilter={handelFilter}/>
      <ContactList contacts={contacts} filter={filter} deleteContacts={ deleteContacts}/>
      </div>
    );
  }

