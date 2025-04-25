import { FC } from "react";
import styles from "./styles.module.css";
import { Container } from "../Container/Container";

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
        </div>
      </Container>
    </header>
  );
};
