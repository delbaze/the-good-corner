import styles from "@/styles/components/ads/Card.module.css";
import { IAdCard } from "@/types/ads";
import Link from "next/link";
import { formatAmount } from "@/lib/utilities";
function Card({ id, picture, price, title }: IAdCard) {
  return (
    <div className={styles.card}>
      <div>{title}</div>
      <Link href={`/ads/view/${id}`} className={styles.imageBloc}>
        <img src={picture} className={styles.imageAd} />
      </Link>
      <div className={styles.bottomCard}>
        <div className={styles.adCardPrice}>{formatAmount(price)}</div>
        <button className={styles.adCardButton}>Ajouter au panier</button>
      </div>
    </div>
  );
}
export default Card;
