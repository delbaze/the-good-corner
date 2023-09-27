import Link from "next/link";
import Logo from "../../common/Logo";
import SearchBar from "./SearchBar";
import styles from "@/styles/components/layout-elements/topbar/Topbar.module.css";
function Topbar() {
  return (
    <nav className={styles.topbar}>
      <div className={styles.logoBloc}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.inputBloc}>
        <SearchBar />
      </div>
      <Link href={"/ads/create"} className={styles.addAdButton}>Ajouter une annonce</Link>
    </nav>
  );
}

export default Topbar;
