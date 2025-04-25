import { FC } from "react";

import { useDataContext } from "../../context/DataContext";

import styles from "./styles.module.css";

export const Filters: FC = () => {
  const { changeFilters, filters } = useDataContext();

  return (
    <ul className={styles.filtersList}>
      <li className={styles.filtersItem}>
        <button
          onClick={() => changeFilters("all")}
          aria-label="select all products"
          className={
            filters === "all" ? styles.filtersBtnSelected : styles.filtersBtn
          }
        >
          All Products
        </button>
      </li>
      <li className={styles.filtersItem}>
        <button
          onClick={() => changeFilters("available")}
          aria-label="select available products"
          className={
            filters === "available"
              ? styles.filtersBtnSelected
              : styles.filtersBtn
          }
        >
          Available Now
        </button>
      </li>
    </ul>
  );
};
