import style from "./Contact.module.css";
import { LuPhoneForwarded } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

const Contact = ({ name, number, deleteContact }) => {
  return (
    <li className={style.contactItem}>
      <div className={style.contactContainer}>
        <p className={style.contactName}>
          <span className={style.icon}>
            <FaRegUser />
          </span>
          {name}
        </p>
        <p className={style.contactNumber}>
          <span className={style.icon}>
            <LuPhoneForwarded />
          </span>
          {number}
        </p>
      </div>
      <button
        className={style.buttonDelete}
        type="button"
        onClick={deleteContact}
      >
        Видалити
      </button>
    </li>
  );
};
export default Contact;
