import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <div className={styles.SearchBox}>
      <label className={styles.labelSearch}>Пошук за іменем</label>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Введіть ім'я для пошуку..."
      />
    </div>
  );
};

export default SearchBox;
