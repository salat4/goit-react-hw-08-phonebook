import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Notiflix from "notiflix";
export const App = () =>  {
 const loginInputId = nanoid();

 const handelChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
const  handelChangeTel = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
const  saveChange = () => {
    const name = this.state.name;
    const number = this.state.number;
    let cont = this.state.contacts;
    if (name === undefined || number === undefined) {
      return Notiflix.Notify.warning("Write name or number");
    }
    for (let i = 0; i < cont.length; i++) {
      if (cont[i].name === name) {
        return Notiflix.Notify.info(`${name} is already is contacts`);
      }
    }
    cont.push({
      id: this.loginInputId,
      name: this.state.name,
      number: this.state.number,
    });
    return this.setState({
      contacts: cont,
      name: "",
      number: "",
    });
  };
 const handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };
 const filterName = (name) => {
    return name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1;
  };
 const deleteContacts = (e) => {
    let deleteCont = [...this.state.contacts];
    for (let i = 0; i < this.state.contacts.length; i++) {
      if (e.target.id === this.state.contacts[i].id) {
        deleteCont.splice(i, 1);
      }
    }
    this.setState({ contacts: deleteCont });
  };
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm/>
      </div>
    );
  }

