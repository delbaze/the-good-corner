import { Ad } from "@/types/ads";
import { useRouter } from "next/router";
import AdCard from "@/components/ads/Card";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
import { useListAdsByCategoryLazyQuery } from "@/types/graphql";
import Pagination from "@/components/categories/Pagination";
function ViewCategory() {
  const router = useRouter();
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

  useEffect(() => {
    const limit = router.query.limit as string;
    const offset = router.query.offset as string;
    getAds({
      variables: {
        listAdsByCategoryId: router.query.id as string,
        limit: +limit,
        offset: +offset,
      },
      fetchPolicy: "no-cache",
    });
  }, [router.query.limit, router.query.offset]);

  return (
    <div>
      Visualisation de la catégorie ayant l'id : {router.query.id}
      <div className={styles.imageBloc}>
        <div>
          <h1>Nombre d'annonces : {data?.listAdsByCategory.count}</h1>
        </div>
        {data?.listAdsByCategory && data?.listAdsByCategory.ads.length > 0 ? (
          <>
            <div className={styles.ads}>
              {data?.listAdsByCategory.ads.map((a) => (
                <AdCard
                  key={a.id}
                  id={a.id}
                  picture={a.picture}
                  price={a.price}
                  title={a.title}
                />
              ))}
            </div>
            <div>
              <Pagination
                count={data?.listAdsByCategory.count}
              />
            </div>
          </>
        ) : (
          <div>Revenez plus tard, pas d'annonces pour l'instant</div>
        )}
      </div>
    </div>
  );
}
ViewCategory.title = "Détail catégorie";
export default ViewCategory;
