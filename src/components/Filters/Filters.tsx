import { FC } from "react";
import styles from "./styles.module.css";

export const Filters: FC = () => {
  return (
    <ul className={styles.filtersList}>
      <li className={styles.filtersItem}>
        <button className={styles.filtersBtn}>All Products</button>
      </li>
      <li className={styles.filtersItem}>
        <button className={styles.filtersBtn}>Available Now</button>
      </li>
    </ul>
  );
};
