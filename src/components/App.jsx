import ContactForm from "./ContactForm/ContactForm";
export const App = () =>  {
//  const deleteContacts = (e) => {
//     let deleteCont = [...this.state.contacts];
//     for (let i = 0; i < this.state.contacts.length; i++) {
//       if (e.target.id === this.state.contacts[i].id) {
//         deleteCont.splice(i, 1);
//       }
//     }
//     this.setState({ contacts: deleteCont });
//   };
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm/>
      </div>
    );
  }

