import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
function ViewCategory() {
  const router = useRouter();

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
        .get(`http://localhost:4000/ads/listbycategory/${router.query.id}`)
        .then(({ data }) => {
          console.log(data);
        });
    }
  }, [router.query.id]);

  return (
    <div>Visualisation de la catégorie ayant l'id : {router.query.id}</div>
  );
}
ViewCategory.title = "Détail catégorie";
export default ViewCategory;
