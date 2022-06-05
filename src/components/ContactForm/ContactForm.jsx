import { useGetContactsQuery } from "redux/ContactsSlice";
import { useAddContactsMutation } from "redux/ContactsSlice";
import Notiflix from "notiflix";

const ContactForm = () => {
  const [addContacts] =useAddContactsMutation()

  const { data, isLoading } = useGetContactsQuery()
const handleAddContacts = async(values) =>{
  values.preventDefault();

  if (isLoading === false){
    for (let i = 0 ; i < data.length ; i++  ){
      if (data[i].name === values.target.elements.name.value) {
                return( 
                
                  Notiflix.Notify.info(`${values.target.elements.name.value} is already is contacts`,
                  values.target.reset())
                );
              }
    }
    try{
  
       return await addContacts({name:values.target.elements.name.value,number:values.target.elements.number.value})

  
    }
    catch(error){
      console.log(error)
    }
    finally {
      values.target.reset();
    }
}
  }
  
  const onSubmit =  async (values)=>{
    await handleAddContacts(values);
  }
  return (
    <div>
       <form onSubmit={onSubmit}>       
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


      