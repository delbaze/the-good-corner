import Card from "@/components/categories/Card";
import { Category } from "@/types/categories";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
import axiosInstance from "@/lib/axiosInstance";
function Categories() {
  // function Categories({ data }: { data: Category[] }) {
  //?  Methode avec le rendu côté serveur
  const [categories, setCategories] = useState<Category[]>([]);
  /**======================
   *    methode avec le rendu côté client
   *========================**/
  useEffect(() => {
    // fetch("http://localhost:4000/categories/list")
    //   .then((response) => response.json())
    //   .then((data) => setCategories(data));
    axiosInstance
      .get<Category[]>(`/categories/list`)
      // .get<Category[]>("http://localhost:4000/categories/list")
      .then(({ data }) => setCategories(data));
  }, []);
  return (
    <div>
      <h1>Liste des catégories</h1>
      <div className={styles.cardBloc}>
        {categories.map((c) => (
          <Card key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
    </div>
  );
}

/**========================================================================
 *                           Méthode avec le rendu côté serveur
 *========================================================================**/
// export const getServerSideProps = async () => {
//   const { data } = await axios.get<Category[]>(
//     "http://localhost:4000/categories/list"
//   );
//   return { props: { data, maValeur: "toto" } };
// };
export default Categories;
