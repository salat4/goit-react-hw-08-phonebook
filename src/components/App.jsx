import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useGetContactsQuery , useAddContactsMutation } from "redux/ContactsSlice";
// // import React from 'react';
// import Notiflix from "notiflix";
// import { nanoid } from "nanoid";
// import * as React from 'react'

// // import { useParams} from "react-router-dom";
// import { useEffect,useState } from "react";
// import * as API from "./Fetch/Fetch";



import { useSelector,useDispatch } from "react-redux";
import action from "../redux/action/action"

export const App = () =>  {
  const [addContacts, result] =useAddContactsMutation()
  const { data, error, isLoading } = useGetContactsQuery()
  const handleAddContacts  = async (values) => {
    // values.preventDefault();
    console.log(values.target.elements.name.value)
    try{
      await addContacts(values.target.elements.name.value);
    }
    catch(error){
      console.log(error)
    }
  }
  // const contacts = useSelector(state => state.contacts.items)

  // const [fetch, setFetch] = useState(null)
  // const [post, setPost] = useState(null)

  // useEffect(()=>{
  //   async function addContacts(){
  //     const movie = await API.addContacts()
  //     setPost(movie)
  // }

  //     async function getContacts(){
  //         const movie = await API.getContacts(...contacts)
  //         setFetch(movie)
  //     }
  //     addContacts()
  //     getContacts()

  // },[contacts])
// console.log(contacts)
// console.log(fetch)
  const dispatch = useDispatch();
  // const loginInputId = nanoid();


  const filterValue = useSelector(state => state.filterValue)
  // const filter = useSelector(state => state.contacts.filter);
  // console.log(contacts)

  const handelFilter = (e) => {
    return dispatch(action.filterName(e.currentTarget.value))
  } 
  // const deleteContacts = (e) => {
  //   for (let i = 0; i < contacts.length; i++){
  //       if (e.target.id === contacts[i].id) {
  //         dispatch(action.deleteContacts(contacts[i].id))
  //             } 
  //   }
  // } 
//   const saveChange = (e) => {
//     e.preventDefault()
//     for (let i = 0; i < contacts.length; i++){
//       if (contacts[i].name === e.target.elements.name.value) {
//         return Notiflix.Notify.info(`${e.target.elements.name.value} is already is contacts`);
//       }
//     }  
//     dispatch(action.addContacts({id : loginInputId,name : e.target.elements.name.value , number : e.target.elements.number.value}))

//     e.target.reset();
// }






    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm handleAddContacts ={handleAddContacts}/>
        <h2>Contacts</h2>
      <Filter handelFilter={handelFilter} filet= {filterValue}/>
      {isLoading=== false &&  <ContactList contacts ={data} filter = {filterValue}/>}
     
      </div>
    );
  }

