import { FC } from "react";
import { ICoffee } from "../../models/ICoffee";

import { Image } from "./../Image/Image";

import styles from "./styles.module.css";
import { Star } from "../../icons/Star";

export const CoffeeItem: FC<ICoffee> = (coffee) => {
  return (
    <li className={styles.item}>
      <Image alt={coffee.name} isPopular={coffee.popular} src={coffee.image} />
      <div className={styles.info}>
        <div className={styles.content}>
          <h2 className={styles.title}>{coffee.name}</h2>
          <div className={styles.price}>{coffee.price}</div>
        </div>
        <div className={styles.ratingGroup}>
          <span className={styles.star}>
            <Star isFilled={true} />
          </span>
          <span className={styles.rating}>{coffee.rating}</span>
          <span className={styles.votes}>
            {coffee.votes > 0 ? `(${coffee.votes} votes)` : "No ratings"}
          </span>
          {!coffee.available && (
            <span className={styles.soldout}>Sold out</span>
          )}
        </div>
      </div>
    </li>
  );
};
