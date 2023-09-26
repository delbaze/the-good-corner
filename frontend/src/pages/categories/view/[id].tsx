import { useRouter } from "next/router";
import { useEffect } from "react";
//!Penser à récupérer l'id de la catégorie à partir du router!
function ViewCategory() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return (
    <div>Visualisation de la catégorie ayant l'id : {router.query.id}</div>
  );
}

export default ViewCategory;
