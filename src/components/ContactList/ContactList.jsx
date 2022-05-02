const ContactList = ({ contacts ,filter }) => {
  const filterName = (name) => {
  return name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }  
  
  const deleteContacts = (e) => {
    let deleteCont = [...contacts]
    for (let i = 0; i < contacts.length; i++){
        if (e.target.id === contacts[i].id) {
         deleteCont.splice(i, 1);
      }
      contacts = deleteCont;
    }
    console.log(contacts)
  }
  return (
    <div>
     <ul>
        {contacts.filter((contact)=>filterName(contact.name))
          .map((contact) => (
            <li key = {contact.id}>
              {contact.name}: {contact.number}
              <button id={contact.id} onClick={deleteContacts}>
                delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ContactList;
