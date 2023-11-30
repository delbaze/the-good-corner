import Link from "next/link";
import Logo from "../../common/Logo";
import SearchBar from "./SearchBar";
import styles from "@/styles/components/layout-elements/topbar/Topbar.module.css";

import { useContext } from "react";
import { ShopContext } from "@/contextes/ShopContext";

function Topbar() {
  const { cart } = useContext(ShopContext);
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
      <Link href={"/ads/admin"} className={styles.addAdButton}>
        Administrer
      </Link>
      <Link href={"/ads/create"} className={styles.addAdButton}>
        Ajouter une annonce
      </Link>
      Panier : ({cart.length})
    </nav>
  );
}

export default Topbar;
