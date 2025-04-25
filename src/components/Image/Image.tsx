import { FC } from "react";

import { IImage } from "../../models/IImage";

import styles from "./styles.module.css";

export const Image: FC<IImage> = ({ src, alt, isPopular }) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={src} alt={alt} />
      {isPopular && <div className={styles.popular}>Popular</div>}
    </div>
  );
};
