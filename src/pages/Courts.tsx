import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import PageProps from "../types/PageProps";
import styles from "./Courts.module.scss";
import List from "../components/List";

const Courts: React.FC<PageProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <section className={styles.courts__wrapper}>
      <div className={styles.courts__container}>
        <div className={styles.courts__inner}>
          <h1 className={styles.courts__title}>Суды</h1>
          <h2 className={styles.courts__subtitle}>Список доступных судов</h2>
          <div className={styles.courts__content}>
            {isLoading ? (
              <List />
            ) : (
              <ContentLoader
                speed={3}
                interval={0}
                width={"100%"}
                height={500}
                backgroundColor="#16171d"
                foregroundColor="#101114"
              >
                <rect x="0" y="0" rx="10" ry="10" width="100%" height="500" />
              </ContentLoader>
            )}
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
