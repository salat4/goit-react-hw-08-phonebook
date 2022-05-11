import { useSelector, useDispatch } from "react-redux";
import Notiflix from "notiflix";
import action from "../../redux/action/action"
import { nanoid } from "nanoid";

const ContactForm = () => {
  const dispatch = useDispatch();
  const loginInputId = nanoid();

  const contacts = useSelector(state =>state.contacts.items)

  const saveChange = (e) => {
    e.preventDefault()
    for (let i = 0; i < contacts.length; i++){
      if (contacts[i].name === e.target.elements.name.value) {
        return Notiflix.Notify.info(`${e.target.elements.name.value} is already is contacts`);
      }
    }  
    dispatch(action.addContacts({id : loginInputId,name : e.target.elements.name.value , number : e.target.elements.number.value}))

    e.target.reset();
}
  return (
    <div>
    <form onSubmit={saveChange}>
    <label>
      Name
      <input
        type="text"
        name="name"     
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <label>
      Tel
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
    <button type="submit">
      Add contact
    </button>
      </form>
      
    </div>
)}
  
 
export default ContactForm;


      