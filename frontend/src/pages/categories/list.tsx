import { useEffect } from "react";

function Categories() {
  useEffect(() => {
    fetch("http://localhost:4000/categories/list")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>Liste des catégories</div>;
}

// Categories.getLayout = function getLayout(page: any) {
//   return (
//     <div>
//       <h1>Liste</h1>
//       <nav>Navbar</nav>
//       {page}
//       <footer>Footer</footer>
//     </div>
//   );
// };
export default Categories;
