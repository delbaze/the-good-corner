import styles from "@/styles/components/layout-elements/topbar/Searchbar.module.css";
function SearchBar() {
  return <input placeholder="Rechercher" className={styles.inputSearch} />;
}

export default SearchBar;
