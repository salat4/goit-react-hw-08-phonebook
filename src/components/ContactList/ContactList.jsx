import { useDeleteContactsMutation } from "redux/ContactsSlice";
const ContactList = ({filter,contacts,}) => {
  const [deleteContacts,result]= useDeleteContactsMutation();
  const filterName = (name) => {
    return name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    }  
   return (
    <div>
     <ul>
     {contacts.filter((contact)=>filterName(contact.name))
        .map((contact) => (
            <li key = {contact.id}>
              {contact.name}: {contact.phone}
              {result.isUninitialized && <button onClick={()=>deleteContacts(contact.id)}>
                delete
              </button>}
             
            </li>
          ))
           } 
      </ul>
    </div>
  );
}

export default ContactList;
