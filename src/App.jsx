import { useState } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import Contact from "./Contact/Contact";
import style from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Валерій Залужний", number: "459-12-56" },
    { id: "id-2", name: "Євген Карась", number: "443-89-12" },
    { id: "id-3", name: "Конотопська Відьма", number: "645-17-79" },
    { id: "id-4", name: "Сергій Стерненко", number: "227-91-26" },
  ]);

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className={style.parentContainer}>
      <h1 className={style.titlePhonebook}>Телефонний записник</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
