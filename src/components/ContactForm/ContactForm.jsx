const ContactForm = ({ handelChange, name, nanoid, saveChange }) => (
  <form>
    <label>
      Name
      <input
        type="text"
        name="name"
        value={name}
        onChange={handelChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nanoid}
      />
    </label>
    <button type="button" onClick={saveChange}>
      Add contact
    </button>
  </form>
);
export default ContactForm;
