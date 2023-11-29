import Link from "next/link";

import styles from "@/styles/components/layout-elements/CategoriesBar.module.css";
import ActiveLink from "../common/ActiveLink";
import { Category } from "@/types/categories";

const data: Category[] = [
  {
    id: "1",
    name: "Chaussures",
  },
  {
    id: "2",
    name: "Vêtements",
  },
  {
    id: "3",
    name: "Voitures",
  },
  {
    id: "4",
    name: "Sports et loisirs",
  },
];
function CategoriesBar() {
  return (
    <div className={styles.categoriesBloc}>
      {data.map((category) => (
        <ActiveLink
          key={category.id}
          href={`/categories/view/${category.id}`}
          className={styles.linkCategoriesBar}
          activeClassName={styles.active}
        >
          {category.name}
        </ActiveLink>
      ))}
      <Link href="/categories/list">Voir plus...</Link>
    </div>
  );
}
export default CategoriesBar;
