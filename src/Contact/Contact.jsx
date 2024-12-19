import style from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={style.contactItem}>
      <div className={style.contactContainer}>
        <p className={style.contactName}>{name}</p>
        <p className={style.contactNumber}>{number}</p>
      </div>
      <button
        className={style.buttonDelete}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
