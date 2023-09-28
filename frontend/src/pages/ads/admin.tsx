import axiosInstance from '@/lib/axiosInstance';
import Link from 'next/link';
import styles from '@/styles/pages/ads/Form.module.css';
import { Ad } from '@/types/ads';
import { Category } from '@/types/categories';
import { formatAmount } from '@/lib/utilities';
import { useEffect, useState } from 'react';

function AdminAds() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [ads, setAds] = useState<Ad[]>([]);

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
        .then(({ data }) => setAds(data))
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
      <div>
        Liste des annonces:
        {ads.length ? (
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ads.map((ad) => (
                <tr>
                  <td>{ad.title}</td>
                  <td>{formatAmount(ad.price)}</td>
                  <td>
                    <Link href={`/ads/edit/${ad.id}`}>Editer</Link>
                    <Link href={`/ads/delete/${ad.id}`}>Supprimer</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Aucune annonce dans cette catégorie</div>
        )}
      </div>
    </div>
  );
}

export default AdminAds;
