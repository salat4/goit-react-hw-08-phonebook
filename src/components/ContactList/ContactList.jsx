import {  useSelector } from "react-redux";
import { useDeleteContactsMutation } from "redux/ContactsSlice";
const ContactList = ({contacts}) => {
  const [deleteContacts]= useDeleteContactsMutation();

  const filter = useSelector(state =>state.user.filter)
  const filterName = (name) => {
    return name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    }  
   return (
     <ul>


     {contacts.filter((contact)=>filterName(contact.name))
        .map((contact) => (
            <li key = {contact.id}>
              {contact.name}: {contact.number}
               <button onClick={()=>deleteContacts(contact.id)}>
                delete
              </button>
             
            </li>
          ))
           } 
      </ul>
  );
}

export default ContactList;
