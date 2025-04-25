import { FC } from "react";
import styles from "./styles.module.css";
import { ICoffee } from "../../models/ICoffee";
import { CoffeeItem } from "../CoffeeItem/CoffeeItem";

interface CoffeeListProps {
  menu: ICoffee[];
}

export const CoffeeList: FC<CoffeeListProps> = ({ menu }) => {
  return (
    <ul className={styles.list}>
      {menu.map((coffee) => {
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
};
