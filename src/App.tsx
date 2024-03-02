import React, { useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [path, setPath] = useState("/");

  const handleNavigationClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    setPath(target.pathname);
  };

  return (
    <>
      <Header path={path} onClick={handleNavigationClick} />
      <main className={styles.main}>{path === "/" && <Home />}</main>
      <footer style={{ flex: "0 0 auto" }}>3</footer>
    </>
  );
};

export default App;
