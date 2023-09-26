import React from "react";

function Categories() {
  return <div>Liste des catégories</div>;
}



Categories.getLayout = function getLayout(page: any) {
  return (
    <div>
      <nav>Navbar</nav>
      <h1>Création</h1>
      {page}
      <footer>Footer</footer>
    </div>
  );
};
export default Categories;
