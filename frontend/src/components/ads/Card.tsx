import styles from "@/styles/components/ads/Card.module.css";
import { IAdCard } from "@/types/ads";
import Link from "next/link";
import { formatAmount } from "@/lib/utilities";
import { useContext } from "react";
import { ShopContext } from "@/contextes/ShopContext";
function Card({ id, picture, price, title }: IAdCard) {
  const {addToCart, cart} = useContext(ShopContext)
  console.log("CART", cart);
  return (
    <div className={styles.card}>
      <div>{title}</div>
      <Link href={`/ads/view/${id}`} className={styles.imageBloc}>
        <img src={picture} className={styles.imageAd} />
      </Link>
      <div className={styles.bottomCard}>
        <div className={styles.adCardPrice}>{formatAmount(price)}</div>
        <button className={styles.adCardButton} onClick={() => addToCart(id)}>Ajouter au panier</button>
      </div>
    </div>
  );
}
export default Card;
