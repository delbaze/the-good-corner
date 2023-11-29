import Card from "@/components/ads/Card";
import { useListAdsRandomQuery } from "@/types/graphql";
import Head from "next/head";

export default function Home() {
  const { data } = useListAdsRandomQuery({ fetchPolicy: "no-cache" });
  return (
    <>
      <h1>Accueil</h1>
      <div>
        <h2>Vous pourriez être intéressés par ... </h2>
        <div style={{display:"flex"}}>
          {data?.listAdsRandom.map((ad) => (
            <Card
              key={ad.id}
              id={ad.id}
              picture={ad.picture}
              price={ad.price}
              title={ad.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
Home.title = "Accueil";
