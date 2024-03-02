import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.scss";
import PageProps from "../types/PageProps";
import { CSSTransition } from "react-transition-group";

const Home: React.FC<PageProps> = () => {
  const [test, setTest] = useState<boolean>(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const timeout: number = setTimeout(() => {
      setTest(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={test}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles["section-enter"],
          enterActive: styles["section-enter-active"],
          exit: styles["section-exit"],
          exitActive: styles["section-exit-active"],
        }}
      >
        <section ref={nodeRef} className={styles.intro__wrapper}>
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
      </CSSTransition>
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
