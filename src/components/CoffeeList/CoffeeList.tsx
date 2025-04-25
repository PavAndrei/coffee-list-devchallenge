import { FC } from "react";
import styles from "./styles.module.css";
import { CoffeeItem } from "../CoffeeItem/CoffeeItem";
import { useDataContext } from "../../context/DataContext";

export const CoffeeList: FC = () => {
  const { menu, isLoading, error } = useDataContext();

  const data = (
    <ul className={styles.list}>
      {menu?.map((coffee) => {
        return (
          <CoffeeItem
            key={coffee.name}
            available={coffee.available}
            image={coffee.image}
            name={coffee.name}
            popular={coffee.popular}
            price={coffee.price}
            rating={coffee.rating}
            votes={coffee.votes}
          />
        );
      })}
    </ul>
  );

  const loading = (
    <span className={styles.warning}>
      Loading... Please wait a bit or reload the page.
    </span>
  );

  const errorMessage = (
    <span className={styles.error}>Something went wrong...</span>
  );

  return (
    <div className={styles.listWrapper}>
      {menu && data} {isLoading && loading} {error && errorMessage}
    </div>
  );
};
