import React from "react";
import styles from "./Header.module.scss";

type HeaderProps = {
  path: string;
  onClick: React.MouseEventHandler;
};

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

const Header: React.FC<HeaderProps> = ({ path, onClick }) => {
  return (
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
              onClick={onClick}
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
  );
};

export default Header;
