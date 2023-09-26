import CategoriesBar from "./layout-elements/CategoriesBar";
import Footer from "./layout-elements/Footer";
import Topbar from "./layout-elements/topbar/Topbar";

function Layout1({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Topbar />
      <CategoriesBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout1;
