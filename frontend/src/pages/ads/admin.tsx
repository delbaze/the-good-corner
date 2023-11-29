import Link from "next/link";
import styles from "@/styles/pages/ads/Form.module.css";
import { formatAmount } from "@/lib/utilities";
import { useEffect, useState } from "react";
import {
  useListAdsByCategoryLazyQuery,
  useListCategoriesQuery,
} from "@/types/graphql";

function AdminAds() {
  const { data } = useListCategoriesQuery({
    onCompleted(data) {
      if (data?.listCategories.length) {
        setFilter(+data.listCategories[0].id);
      }
    },
  });
  const [getAdsByCategory, { data: dataAds }] = useListAdsByCategoryLazyQuery({
    fetchPolicy: "no-cache",
  });
  const [filter, setFilter] = useState<number>();

  console.log("%c⧭", "color: #731d6d", dataAds);
  useEffect(() => {
    if (filter) {
      // getAdsByCategory({variables: {listAdsByCategoryId: filter.toString()}})
      getAdsByCategory({ variables: { listAdsByCategoryId: `${filter}` } });
    }
  }, [filter]);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(+e.target.value);
  };
  return (
    <div>
      <div>
        {data?.listCategories.length && (
          <>
            Filtre:
            <select
              className={styles.inputForm}
              onChange={handleChange}
              name="category"
              value={filter}
            >
              {data.listCategories.map((c) => (
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
        {dataAds?.listAdsByCategory.length ? (
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataAds?.listAdsByCategory.map((ad) => (
                <tr key={ad.id}>
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
