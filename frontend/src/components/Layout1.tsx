import CategoriesBar from "./layout-elements/CategoriesBar";
import Footer from "./layout-elements/Footer";
import Topbar from "./layout-elements/topbar/Topbar";
import styles from "@/styles/components/Layout1.module.css";
function Layout1({ children }: { children: JSX.Element }) {
  return (
    <div className="mainBloc">
      <div className="headerPage">
        <Topbar />
        <CategoriesBar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout1;
