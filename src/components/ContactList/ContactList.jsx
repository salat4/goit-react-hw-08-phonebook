import { useDeleteContactsMutation } from "redux/ContactsSlice";
const ContactList = ({filter,contacts,}) => {
  const [deleteContacts,reset]= useDeleteContactsMutation();
  const filterName = (name) => {
    return name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    }  
   return (
    <div>
     <ul>
     {contacts.filter((contact)=>filterName(contact[0]))
          .map((contact) => (
            <li key = {contact.id}>
              {contact[0]}: {contact[1]}
              <button onClick={()=>deleteContacts(contact.id)}>
                delete
              </button>
            </li>
          ))
           } 
      </ul>
    </div>
  );
}

export default ContactList;
