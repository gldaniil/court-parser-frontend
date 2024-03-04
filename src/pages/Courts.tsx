import React from "react";
import PageProps from "../types/PageProps";
import styles from "./Courts.module.scss";

const Courts: React.FC<PageProps> = () => {
  return (
    <section className={styles.courts__wrapper}>
      <div className={styles.courts__container}>
        <div className={styles.courts__inner}>
          <h1 className={styles.courts__title}>Суды</h1>
          <h2 className={styles.courts__subtitle}>Список доступных судов</h2>
          <div className={styles.courts__content}>
            Здесь будет список судов...
          </div>
          <div className={styles.faq}>
            <h3 className={styles.faq__title}>Дополнительные сведения</h3>
            <ul className={styles.faq__list}>
              <li className={styles.faq__item}>
                <p>
                  Самостоятельное добавление суда доступно в отдельной{" "}
                  <a href="">форме</a>.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courts;
