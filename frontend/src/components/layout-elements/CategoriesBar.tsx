import Link from "next/link";

import styles from "@/styles/components/layout-elements/CategoriesBar.module.css"
interface Category {
  id: number;
  name: string;
}
const data: Category[] = [
  {
    id: 1,
    name: "Chaussures",
  },
  {
    id: 2,
    name: "Vêtements",
  },
  {
    id: 3,
    name: "Voitures",
  },
  {
    id: 4,
    name: "Sports et loisirs",
  },
];
function CategoriesBar() {
  return (
    <div className={styles.categoriesBloc}>
      {data.map((category) => (
        <Link key={category.id} href={`/categories/view/${category.id}`}>{category.name}</Link>
      ))}
    </div>
  );
}
export default CategoriesBar;
