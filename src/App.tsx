import React from "react";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <nav className={styles.navigation}>
            <a href="#" className={styles.navigation__link}>
              Главная
            </a>
            <a href="#" className={styles.navigation__link}>
              Суды
            </a>
            <a href="#" className={styles.navigation__link}>
              Помощь
            </a>
          </nav>
          <div className={styles.socials}>
            <a href="#" className={styles.socials__link}>
              G
            </a>
            <a href="#" className={styles.socials__link}>
              T
            </a>
          </div>
        </div>
      </header>
      <main style={{ flex: "1 0 auto" }}>2</main>
      <footer style={{ flex: "0 0 auto" }}>3</footer>
    </>
  );
};

export default App;
