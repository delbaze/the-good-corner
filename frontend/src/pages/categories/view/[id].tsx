import { Ad } from "@/types/ads";
import { useRouter } from "next/router";
import AdCard from "@/components/ads/Card";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
// import { useLazyQuery } from "@apollo/client";
// import { LIST_ADS_BY_CATEGORY_ID } from "@/requetes/queries/ads.queries";
import {
  ListAdsByCategoryQuery,
  useListAdsByCategoryLazyQuery,
} from "@/types/graphql";
function ViewCategory() {
  const router = useRouter();
  console.log("router.query.id", router.query.id);
  const [ads, setAds] = useState<Ad[]>([]);

  const [getAds, { data, loading, error }] = useListAdsByCategoryLazyQuery();
  // const [getAds, { data, loading, error }] = useLazyQuery<ListAdsByCategoryQuery>(
  //   LIST_ADS_BY_CATEGORY_ID
  // );

  useEffect(() => {
    if (router.query.id) {
      getAds({
        variables: {
          listAdsByCategoryId: router.query.id as string,
        },
      });
    }
  }, [router.query.id]);

  /**======================
   *    conditions plus complexes qu'un ternaire
   *========================**/
  // const monexemple = () => {
  //   let result = <></>;
  //   if (ads.length > 0) {
  //     result = <div>Tiens j'ai des annonces</div>;
  //   } else {
  //     result = <div>Il n'y a pas d'annonces</div>;
  //   }
  //   return result;
  // };
  return (
    <div>
      Visualisation de la catégorie ayant l'id : {router.query.id}
      <div className={styles.imageBloc}>
        {/* {monexemple()} */}
        {data?.listAdsByCategory && data?.listAdsByCategory.length > 0 ? (
          // {ads.length ? (
          data?.listAdsByCategory.map((a) => (
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
