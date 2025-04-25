import { FC } from "react";
import styles from "./styles.module.css";
import { useDataContext } from "../../context/DataContext";

export const Filters: FC = () => {
  const { changeFilters } = useDataContext();

  return (
    <ul className={styles.filtersList}>
      <li className={styles.filtersItem}>
        <button
          onClick={() => changeFilters("all")}
          aria-label="select all products"
          className={styles.filtersBtn}
        >
          All Products
        </button>
      </li>
      <li className={styles.filtersItem}>
        <button
          onClick={() => changeFilters("availiable")}
          aria-label="select available products"
          className={styles.filtersBtn}
        >
          Available Now
        </button>
      </li>
    </ul>
  );
};
