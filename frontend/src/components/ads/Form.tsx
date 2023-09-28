import axiosInstance from "@/lib/axiosInstance";
import styles from "@/styles/pages/ads/Form.module.css";
import { IAdForm } from "@/types/ads";
import { Category } from "@/types/categories";
import { useEffect, useState } from "react";
function Form() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [formulaireData, setFormulaireData] = useState<IAdForm>({} as IAdForm);

  useEffect(() => {
    axiosInstance
      .get<Category[]>("/categories/list")
      .then(({ data }) => setCategories(data));
  }, []);

  useEffect(() => {
    console.log(formulaireData);
  },[formulaireData])

  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormulaireData({ ...formulaireData, category: { id: +e.target.value } });
  };
  return (
    <form className={styles.form}>
      <input placeholder="titre" className={styles.inputForm} />
      <input placeholder="description" className={styles.inputForm} />
      <input placeholder="owner" className={styles.inputForm} />
      <input placeholder="price" className={styles.inputForm} />
      <input placeholder="location" className={styles.inputForm} />
      <input placeholder="picture" className={styles.inputForm} />
      <select className={styles.inputForm} onChange={handleChange}>
        <option>Choisissez une catégorie</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      {/**catégories */}
      <button>Ajouter l'annonce</button>
    </form>
  );
}

export default Form;
