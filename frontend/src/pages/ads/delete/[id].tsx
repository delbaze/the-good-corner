import { useDeleteAdMutation } from "@/types/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";
function DeleteAd() {
  const router = useRouter();
  const [deleteAd] = useDeleteAdMutation();

  //   useEffect(() => {
  //     const id = router.query.id;

  //     if (id) {
  //       console.log("j'ai l'id", id);
  //     }
  //   }, [router.query.id]);

  const handleDelete = () => {
    if (router.query.id) {
      const deleteAdId = router.query.id as string;
      deleteAd({
        variables: { deleteAdId },
        onCompleted(data) {
          console.log(data);
          router.back();
        },
        onError(error) {
          console.log(error);
        },
      });
    }
  };
  return (
    <div>
      Confirmez-vous la suppression de l'annonce ayant l'id {router.query.id}
      <button onClick={() => router.back()}>Annuler</button>
      <button onClick={handleDelete}>Valider</button>
    </div>
  );
}

export default DeleteAd;
