import React, { useState , useEffect } from 'react';
import Notiflix from "notiflix";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const loginInputId = nanoid();
  const LS_KEY = "reader_contact";
  const [contacts, setContacts] = useState(()=>{
  const saved = localStorage.getItem(LS_KEY);
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [filter, setFilter] = useState("")


  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  },[contacts])

  const handelChangeName = (e) => {
    setName(e.target.value)
  }
  const handelChangeTel = (e) => {
    setTel(e.target.value)
  }
  const saveChange = () => {
    if (name === "" || tel === "") {
    return Notiflix.Notify.warning("Write name or number");
    }
    for (let i = 0; i < contacts.length; i++){
      if (contacts[i].name === name) {
        return Notiflix.Notify.info(`${name} is already is contacts`);
      }
    }  
    setContacts([...contacts,{id : loginInputId,name : name , number : tel}])
    setName("")
    setTel("")
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
    <form>
    <label>
      Name
      <input
        type="text"
        name="name"
        value={name}
        onChange={handelChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <label>
      Tel
      <input
        type="tel"
        name="number"
        value={tel}
        onChange={handelChangeTel}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
    <button type="button" onClick={saveChange}>
      Add contact
    </button>
      </form>
      <h2>Contacts</h2>
      <Filter filter={filter} handelFilter={handelFilter}/>
      <ContactList contacts={contacts} filter={filter} deleteContacts={ deleteContacts}/>
    </div>
)}
  
 
export default ContactForm;


      