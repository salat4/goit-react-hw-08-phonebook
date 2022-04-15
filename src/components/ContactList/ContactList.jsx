const ContactList = (contacts) => (
  <div>
    {console.log(contacts)}
    {/* <ul>
      {/* {function getContacts(contact) {
        return [contact.id, contact.name].join(" ");
      }}
      {contacts.map(this.getContacts)} */}

    <ul>
      {contacts.map(
        (contact) => console.log(contact)
        // <li></li>
      )}
    </ul>
  </div>
);
export default ContactList;
