import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
export class App extends Component {
  loginInputId = nanoid();

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson" },
      { id: "id-2", name: "Hermione Kline" },
      { id: "id-3", name: "Eden Clements" },
      { id: "id-4", name: "Annie Copeland" },
    ],
    name: "",
  };
  handelChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  saveChange = (e) => {
    let cont = this.state.contacts;
    cont.push({ id: this.loginInputId, name: this.state.name });
    this.setState({
      contacts: cont,
      name: "",
    });
  };

  render() {
    const contacts = this.state.contacts;
    // console.log(this.state.contacts);
    const { name } = this.state.name;

    // console.log(contacts);
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm
          handelChange={this.handelChange}
          name={name}
          nanoid={this.loginInputId}
          saveChange={this.saveChange}
        />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
