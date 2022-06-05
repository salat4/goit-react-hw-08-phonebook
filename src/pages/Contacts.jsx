import { lazy } from "react"
import { useGetContactsQuery } from "redux/ContactsSlice"

const ContactForm = lazy(()=>import('components/ContactForm/ContactForm'))
const ContactList = lazy(()=>import('components/ContactList/ContactList'))
const Filter = lazy(()=> import ('components/Filter/Filter'))


export const Contacts = ({handleAddContacts}) => {
    const {data,isLoading} = useGetContactsQuery();
    return(
        <div>
        <ContactForm handleAddContacts = {handleAddContacts}/>
        <Filter/>
        {isLoading === false && <ContactList contacts = {data}/>}
        </div>
    )
}