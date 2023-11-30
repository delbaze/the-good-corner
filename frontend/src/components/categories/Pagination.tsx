import { IPagination } from "@/types/categories";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/Pagination.module.css";

const range = [5, 10, 20, 50, 100];
function Pagination({ count }: IPagination) {
  const router = useRouter();

  const handleSelectRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const p = router.query.page ?? 1;
    const limit = router.query.limit ?? 5;
    router.push({
      query: { ...router.query, offset: +limit * +p, limit: e.target.value },
    });
  };

  const handleChangePage = (p: number) => {
    const limit = router.query.limit ?? 5;
    router.push({ query: { ...router.query, offset: +limit * p, page: p } });
  };
  return (
    <div>
      <div className={styles.pagebuttonBloc}>
        <select
          className={styles.select}
          onChange={handleSelectRange}
          value={router.query.limit ?? 5}
        >
          {range.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {Array.from(
          Array(Math.round(count / +(router.query.limit ?? 5))),
          (_, i) => i + 1
        ).map((p) => {
          const page = router.query.page as string;
          const actualPage = p == +page;
          return (
            <div
              key={p}
              className={`${styles.pagebutton} ${
                actualPage && styles.actualPage
              }`}
              onClick={() => handleChangePage(p)}
            >
              {p}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
