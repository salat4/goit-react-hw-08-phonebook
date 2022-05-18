
const ContactList = ({filter,contacts,deleteContacts}) => {
  // const filterName = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase())
  // })
   return (
    <div>
     <ul>
        {contacts.map((contact) => (
            <li key = {contact.id}>
              {contact.name}: {contact.number}
              {/* <button id={contact.id} onClick={deleteContacts}>
                delete
              </button> */}
            </li>
          ))
           } 
      </ul>
    </div>
  );
}

export default ContactList;
