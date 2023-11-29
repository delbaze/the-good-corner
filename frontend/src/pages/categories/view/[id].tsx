import { Ad } from "@/types/ads";
import { useRouter } from "next/router";
import AdCard from "@/components/ads/Card";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
import { useListAdsByCategoryLazyQuery } from "@/types/graphql";
function ViewCategory() {
  const router = useRouter();
  console.log("router.query.id", router.query.id);
  const [ads, setAds] = useState<Ad[]>([]);

  const [getAds, { data }] = useListAdsByCategoryLazyQuery({
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    if (router.query.id) {
      getAds({
        variables: {
          listAdsByCategoryId: router.query.id as string,
        },
      });
    }
  }, [router.query.id]);

  return (
    <div>
      Visualisation de la catégorie ayant l'id : {router.query.id}
      <div className={styles.imageBloc}>
        <div>
          <h1>Nombre d'annonces : {data?.listAdsByCategory.count}</h1>
        </div>
        {data?.listAdsByCategory && data?.listAdsByCategory.ads.length > 0 ? (
          data?.listAdsByCategory.ads.map((a) => (
            <AdCard
              key={a.id}
              id={a.id}
              picture={a.picture}
              price={a.price}
              title={a.title}
            />
          ))
        ) : (
          <div>Revenez plus tard, pas d'annonces pour l'instant</div>
        )}
      </div>
    </div>
  );
}
ViewCategory.title = "Détail catégorie";
export default ViewCategory;
