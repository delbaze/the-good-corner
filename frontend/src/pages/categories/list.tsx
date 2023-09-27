import Card from "@/components/categories/Card";
import { Category } from "@/types/categories";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    // fetch("http://localhost:4000/categories/list")
    //   .then((response) => response.json())
    //   .then((data) => setCategories(data));

    axios
      .get<Category[]>("http://localhost:4000/categories/list")
      .then(({ data }) => setCategories(data));
  }, []);
  return (
    <div>
      Liste des catégories
      <div className={styles.cardBloc}>
        {categories.map((c) => (
          <Card key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
