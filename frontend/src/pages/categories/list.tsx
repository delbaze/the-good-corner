import React from "react";

function Categories() {
  return <div>Liste des catégories</div>;
}



Categories.getLayout = function getLayout(page: any) {
  return (
    <div>
      <h1>Liste</h1>
      <nav>Navbar</nav>
      {page}
      <footer>Footer</footer>
    </div>
  );
};
export default Categories;
