import { useState } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import Contact from "./Contact/Contact";

function App() {
  const [contact, setContact] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1 className={style.titlePhonebook}>Phonebook</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
