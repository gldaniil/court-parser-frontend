import React, { useState } from "react";
import styles from "./App.module.scss";

const navs: { title: string; link: string }[] = [
  {
    title: "Главная",
    link: "/",
  },
  {
    title: "Суды",
    link: "/courts",
  },
  {
    title: "Помощь",
    link: "/help",
  },
];

const App: React.FC = () => {
  const [path, setPath] = useState("/");

  const handleNavigationClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    setPath(target.pathname);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <nav className={styles.navigation}>
            {navs.map((n) => (
              <a
                key={n.link}
                href={n.link}
                className={
                  n.link === path
                    ? `${styles.navigation__link} ${styles.navigation__link_active}`
                    : styles.navigation__link
                }
                onClick={handleNavigationClick}
              >
                {n.title}
              </a>
            ))}
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
      <main className={styles.main}>
        <section className={styles.intro__wrapper}>
          <div className={styles.intro__container}>
            <div className={styles.intro__inner}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              consequatur autem vitae sapiente consectetur ratione placeat
              necessitatibus quod inventore! Blanditiis sequi ratione ad vitae
              totam officiis illum iure atque quia magni! Molestiae molestias
              aliquid error suscipit quam neque consectetur, voluptas ad. Illo
              vero a aspernatur unde at itaque numquam veniam dolorem
              consectetur, atque optio ullam nulla iusto tenetur doloribus nisi
              commodi praesentium error! Quia libero magni incidunt nulla,
              commodi accusamus minus ea esse. Eligendi aperiam soluta voluptate
              aliquid consequatur, sunt neque, ex quam alias ut repudiandae,
              vitae modi! Ratione, facilis?
            </div>
          </div>
        </section>
        <section className={styles.news__wrapper}>
          <div className={styles.news__container}>
            <div className={styles.news__inner}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              consequatur autem vitae sapiente consectetur ratione placeat
              necessitatibus quod inventore! Blanditiis sequi ratione ad vitae
              totam officiis illum iure atque quia magni! Molestiae molestias
              aliquid error suscipit quam neque consectetur, voluptas ad. Illo
              vero a aspernatur unde at itaque numquam veniam dolorem
              consectetur, atque optio ullam nulla iusto tenetur doloribus nisi
              commodi praesentium error! Quia libero magni incidunt nulla,
              commodi accusamus minus ea esse. Eligendi aperiam soluta voluptate
              aliquid consequatur, sunt neque, ex quam alias ut repudiandae,
              vitae modi! Ratione, facilis?
            </div>
          </div>
        </section>
      </main>
      <footer style={{ flex: "0 0 auto" }}>3</footer>
    </>
  );
};

export default App;
