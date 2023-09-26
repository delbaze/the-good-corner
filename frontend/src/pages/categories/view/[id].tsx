import { useRouter } from "next/router";
import { useEffect } from "react";
function ViewCategory() {
  const router = useRouter();
  useEffect(() => {
    //? ici se trouvera l'appel API vers le back
    console.log(router.query.id);
  }, []);

  return (
    <div>Visualisation de la catégorie ayant l'id : {router.query.id}</div>
  );
}
ViewCategory.title = "Détail catégorie"
export default ViewCategory;
