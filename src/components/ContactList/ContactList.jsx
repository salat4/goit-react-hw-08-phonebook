const ContactList = ({ contacts ,filter ,deleteContacts}) => {
  // const filterName = (name) => {
  // return name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  // }  
   return (
    <div>
     <ul>
        {contacts.filter((contact)=>(contact.name))
         .map((contact) => (
            <li key = {contact.id}>
              {contact.name}: {contact.number}
              <button id={contact.id} onClick={deleteContacts}>
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
