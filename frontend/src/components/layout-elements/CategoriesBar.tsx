import Link from "next/link";
import styles from "@/styles/components/layout-elements/CategoriesBar.module.css";
import ActiveLink from "../common/ActiveLink";
import { useListCategoriesQuery } from "@/types/graphql";

function CategoriesBar() {
  const { data } = useListCategoriesQuery({ variables: { limit: 4 } });
  return (
    <div className={styles.categoriesBloc}>
      {data?.listCategories.map((category) => (
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
