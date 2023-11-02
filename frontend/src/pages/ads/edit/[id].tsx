import Form from "@/components/ads/Form";
import axiosInstance from "@/lib/axiosInstance";
import { Ad } from "@/types/ads";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ViewEdit() {
  const router = useRouter();
  const [ad, setAd] = useState<Ad>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (router.query.id) {
      axiosInstance.get<Ad>(`/ads/find/${router.query.id}`).then(({ data }) => {
        setAd(data);
        setLoading(false);
      });
    }
  }, [router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }

  return (
    <div>
      {ad ? (
        <>
          <Form initialData={ad}/>
          {/* <SheetAd {...ad} /> */}
          {/* <div>Titre: {ad?.title}</div>
          <div>Prix: {ad?.price}</div>
          <div>Description: {ad?.description}</div> */}
        </>
      ) : (
        <div>L'annonce n'existe pas</div>
      )}
    </div>
  );
}

export default ViewEdit;
