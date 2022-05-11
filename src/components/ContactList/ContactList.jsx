import { useSelector,useDispatch } from 'react-redux'
import action from "../../redux/action/action"

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter);
  const filterName = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase())
  })
  const deleteContacts = (e) => {
    for (let i = 0; i < contacts.length; i++){
        if (e.target.id === contacts[i].id) {
          dispatch(action.deleteContacts(contacts[i].id))
              } 
    }
  } 
   return (
    <div>
     <ul>
        {filterName.map((contact) => (
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
