import SheetAd from "@/components/ads/SheetAd";
import { FIND_AD_BY_ID } from "@/requetes/queries/ads.queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IError {
  field: string | null;
  message: string;
}
function ViewAd() {
  const router = useRouter();
  const [getAd, { data, error, loading }] = useLazyQuery(FIND_AD_BY_ID);
  useEffect(() => {
    if (router.query.id) {
      getAd({
        variables: {
          findAdById: router.query.id,
        },
      });
    }
  }, [router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{<SheetAd {...data?.findAdById} />}</div>;
}

export default ViewAd;
