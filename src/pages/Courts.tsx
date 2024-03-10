import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";
import styles from "./Courts.module.scss";
import List from "../components/List";
import PageProps from "../types/PageProps";

type CourtsData = {
  id: number;
  court_name: string;
  url: string;
  last_changed: string;
}[];

const Courts: React.FC<PageProps> = () => {
  const [courts, setCourts] = useState<CourtsData>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCourts = async () => {
      try {
        const { data }: { data: CourtsData } = await axios.get(
          "http://localhost:4010/courts"
        );
        setCourts(data);
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе списка судов!");
        console.error(error);
      }
    };

    getCourts();

    return () => {
      console.log("useEffect завершил работу...");
    };
  }, []);

  return (
    <section className={styles.courts__wrapper}>
      <div className={styles.courts__container}>
        <div className={styles.courts__inner}>
          <h1 className={styles.courts__title}>Суды</h1>
          <h2 className={styles.courts__subtitle}>Список доступных судов</h2>
          <div className={styles.courts__content}>
            {!isLoading ? (
              <List courts={courts} />
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
