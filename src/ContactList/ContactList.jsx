import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, filteredContacts, deleteContact }) => {
  return (
    <ul className={styles.PhoneList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={deleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;
