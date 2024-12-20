import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={styles.SearchBox}>
      <label htmlFor="search className={styles.labelSearch">
        Пошук за іменем
      </label>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Введіть ім'я для пошуку..."
      />
    </div>
  );
};
SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBox;
