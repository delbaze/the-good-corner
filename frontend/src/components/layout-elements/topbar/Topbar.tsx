import Link from "next/link";
import Logo from "../../common/Logo";
import SearchBar from "./SearchBar";

function Topbar() {
  return (
    <nav>
      <div>
        <Logo />
      </div>
      <div>
        <SearchBar />
      </div>
      <Link href={"/ads/create"}>Ajouter une annonce</Link>
    </nav>
  );
}

export default Topbar;
