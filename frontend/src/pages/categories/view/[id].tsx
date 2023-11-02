import { Ad } from "@/types/ads";
import axios from "axios";
import { useRouter } from "next/router";
import AdCard from "@/components/ads/Card";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
import { useLazyQuery } from "@apollo/client";
import { LIST_ADS_BY_CATEGORY_ID } from "@/requetes/queries/ads.queries";
function ViewCategory() {
  const router = useRouter();
  console.log("router.query.id", router.query.id);
  const [ads, setAds] = useState<Ad[]>([]);

  const [getAds, { data, loading, error }] = useLazyQuery(
    LIST_ADS_BY_CATEGORY_ID
  );

  console.log("%c⧭", "color: #e50000", data);
  useEffect(() => {
    // getAds();
    if (router.query.id) {
      getAds({
        variables: {
          listAdsByCategoryId: router.query.id,
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
        {data?.listAdsByCategory.length > 0 ? (
          // {ads.length ? (
          data?.listAdsByCategory.map((a: any) => (
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
