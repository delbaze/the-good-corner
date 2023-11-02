//frontend/src/pages/ads/edit/[id].tsx

import Form from "@/components/ads/Form";
import axiosInstance from "@/lib/axiosInstance";
import { Ad } from "@/types/ads";
import {
  useFindAdByIdLazyQuery,
  useFindForEditAdByIdLazyQuery,
  useFindForEditAdByIdQuery,
} from "@/types/graphql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ViewEdit() {
  const router = useRouter();

  const [getAd, { data, loading }] = useFindForEditAdByIdLazyQuery();
  console.log('%c⧭', 'color: #ffa640', data);

  useEffect(() => {
    const { id } = router.query;
    console.log('%c⧭', 'color: #00b300', id);
    if (id) {
      getAd({
        variables: { findAdById: id as string },
      });
    }
  }, [router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }

  return (
    <div>
      {data?.findAdById ? (
        <>
          <Form data={data?.findAdById} />
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
