import React, { useState } from 'react';
import Notiflix from "notiflix";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { nanoid } from "nanoid";

const ContactForm = () => {
const loginInputId = nanoid();
  const [contacts, setContacts] = useState([{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },]);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [filter,setFilter] = useState("")


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
      <ContactList contacts={contacts} filter={filter}/>
    </div>
)}
  
 
export default ContactForm;


      