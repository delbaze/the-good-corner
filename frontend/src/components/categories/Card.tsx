import styles from "@/styles/components/categories/Card.module.css";
import Link from "next/link";
interface ICard {
  id: number;
  name: string;
}
function Card({ id, name }: ICard) {
  return (
    <Link href={`/categories/view/${id}`}>
      <div className={styles.card}>
        <div className={styles.cardText}>{name}</div>
      </div>
    </Link>
  );
}

export default Card;
