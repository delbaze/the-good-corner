// import dynamic from "next/dynamic";
import CategoriesBar from "./layout-elements/CategoriesBar";
import Footer from "./layout-elements/Footer";
import Topbar from "./layout-elements/topbar/Topbar";
import styles from "@/styles/components/Layout1.module.css";

// const Topbar = dynamic(() => import('./layout-elements/topbar/Topbar'), { ssr: false })

function Layout1({ children }: { children: JSX.Element }) {
  return (
    <div className={styles.mainBloc}>
      <div className={styles.container}>
        <div className={styles.headerPage}>
          <Topbar />
          <CategoriesBar />
        </div>
        <div className={styles.app}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout1;
