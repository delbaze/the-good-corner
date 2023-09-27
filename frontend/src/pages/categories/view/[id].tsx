import { Ad } from "@/types/ads";
import axios from "axios";
import { useRouter } from "next/router";
import AdCard from "@/components/ads/Card";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
function ViewCategory() {
  const router = useRouter();

  const [ads, setAds] = useState<Ad[]>([]);
  // const getAds = async () => {
  //   console.log(router.query.id);
  //   if (router.query.id) {
  //     const ads = await axios.get(
  //       `http://localhost:4000/ads/listbycategory/${router.query.id}`
  //     );
  //     console.log("%c⧭", "color: #0088cc", ads);
  //     // return ads;
  //   }
  //   //stocker dans une variable d'état
  // };
  useEffect(() => {
    // getAds();
    if (router.query.id) {
      axios
        .get<Ad[]>(
          `http://localhost:4000/ads/listbycategory/${router.query.id}`
        )
        .then(({ data }) => {
          console.log(data);
          setAds(data);
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
        {ads.length > 0 ? (
          // {ads.length ? (
          ads.map((a) => (
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
