  import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useGetContactsQuery , useAddContactsMutation } from "redux/ContactsSlice";
// // import React from 'react';
import Notiflix from "notiflix";
// import { nanoid } from "nanoid";
// import * as React from 'react'

// // import { useParams} from "react-router-dom";
// import { useEffect,useState } from "react";
// import * as API from "./Fetch/Fetch";

import { useState } from "react";

export const App = () =>  {
  const [filter, setFilter] = useState("")
  const [addContacts, result] =useAddContactsMutation()
  const { data, error, isLoading } = useGetContactsQuery()
 
  const handleAddContacts  = async (values) => {
    values.preventDefault();
    for (let i = 0 ; i < data.length ; i++  ){
      if (data[i][0] === values.target.elements.name.value) {
                return( 
                
                  Notiflix.Notify.info(`${values.target.elements.name.value} is already is contacts`,
                  values.target.reset())
                );
              }
    }
    try{
      await addContacts([values.target.elements.name.value,values.target.elements.number.value]);
    }
    catch(error){
      console.log(error)
    }
    finally {
      values.target.reset();
    }
  }


  // const loginInputId = nanoid();


  // const filter = useSelector(state => state.contacts.filter);
  // console.log(contacts)

  const handelFilter = (e) => {
    setFilter(e.target.value)
  } 
      return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm handleAddContacts ={handleAddContacts} isLoading={isLoading}/>
        <h2>Contacts</h2>
      <Filter handelFilter={handelFilter} filter= {filter}/>
      {isLoading=== false &&  <ContactList contacts ={data} filter = {filter}/>}
     
      </div>
    );
  }

