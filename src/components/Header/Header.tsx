import { FC } from "react";

import { Container } from "../Container/Container";

import styles from "./styles.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>Our Collection</h1>
          <p className={styles.text}>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <span className={styles.decor}></span>
        </div>
      </Container>
    </header>
  );
};
