import axiosInstance from "@/lib/axiosInstance";
import { Category } from "@/types/categories";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/ads/Form.module.css";
import { Ad } from "@/types/ads";

function AdminAds() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState<number>();
  useEffect(() => {
    axiosInstance
      .get<Category[]>("/categories/list", {})
      .then(({ data }) => setCategories(data));
  }, []);

  //lorsque les catégories arrivent, on établi le filtre initial sur la première catégorie
  useEffect(() => {
    if (categories.length) {
      setFilter(categories[0].id);
    }
  }, [categories]);

  useEffect(() => {
    if (filter) {
      console.log("ALLER CHERCHER LES ANNONCES DE " + filter);
      axiosInstance
        .get<Ad[]>(`/ads/listByCategory/${filter}`)
        .then(({ data }) => console.log(data))
        .catch((error) => console.log(error));
    }
  }, [filter]);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(+e.target.value);
  };
  return (
    <div>
      <div>
        {categories.length && (
          <>
            Filtre:
            <select
              className={styles.inputForm}
              onChange={handleChange}
              name="category"
              value={filter}
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <div>Liste des annonces:</div>
    </div>
  );
}

export default AdminAds;
