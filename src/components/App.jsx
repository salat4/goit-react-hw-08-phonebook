import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useGetContactsQuery , useAddContactsMutation } from "redux/ContactsSlice";
import Notiflix from "notiflix";
import { useState } from "react";

export const App = () =>  {
  const [filter, setFilter] = useState("")
  const [addContacts] =useAddContactsMutation()
  const { data, isLoading } = useGetContactsQuery()
  const handleAddContacts  = async (values) => {
    values.preventDefault();
    for (let i = 0 ; i < data.length ; i++  ){
      console.log()
      if (data[i].name === values.target.elements.name.value) {
                return( 
                
                  Notiflix.Notify.info(`${values.target.elements.name.value} is already is contacts`,
                  values.target.reset())
                );
              }
    }
    try{
  
       return await addContacts({name:values.target.elements.name.value,number:values.target.elements.number.value})
      
  
    }
    catch(error){
      console.log(error)
    }
    finally {
      values.target.reset();
    }
  }
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

