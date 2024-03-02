import React from "react";
import styles from "./Home.module.scss";
import PageProps from "../types/PageProps";

const Home: React.FC<PageProps> = ({ pathname }) => {
  return (
    <>
      <section className={styles.intro__wrapper}>
        <div className={styles.intro__container}>
          <div className={styles.intro__inner}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            consequatur autem vitae sapiente consectetur ratione placeat
            necessitatibus quod inventore! Blanditiis sequi ratione ad vitae
            totam officiis illum iure atque quia magni! Molestiae molestias
            aliquid error suscipit quam neque consectetur, voluptas ad. Illo
            vero a aspernatur unde at itaque numquam veniam dolorem consectetur,
            atque optio ullam nulla iusto tenetur doloribus nisi commodi
            praesentium error! Quia libero magni incidunt nulla, commodi
            accusamus minus ea esse. Eligendi aperiam soluta voluptate aliquid
            consequatur, sunt neque, ex quam alias ut repudiandae, vitae modi!
            Ratione, facilis?
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
            vero a aspernatur unde at itaque numquam veniam dolorem consectetur,
            atque optio ullam nulla iusto tenetur doloribus nisi commodi
            praesentium error! Quia libero magni incidunt nulla, commodi
            accusamus minus ea esse. Eligendi aperiam soluta voluptate aliquid
            consequatur, sunt neque, ex quam alias ut repudiandae, vitae modi!
            Ratione, facilis?
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
