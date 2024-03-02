import React, { useState } from "react";
import styles from "./App.module.scss";
import PageProps from "./types/PageProps";
import Header from "./components/Header";
import Home from "./pages/Home";
import Courts from "./pages/Courts";
import Help from "./pages/Help";

const pages: { [key: string]: React.FC<PageProps> } = {
  "/": Home,
  "/courts": Courts,
  "/help": Help,
};

const App: React.FC = () => {
  const [path, setPath] = useState("/");

  const handleNavigationClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    setPath(target.pathname);
  };

  const getPageContent = () => {
    const component = pages[path];
    return component({ pathname: path });
  };

  return (
    <>
      <Header path={path} onClick={handleNavigationClick} />
      <main className={styles.main}>{getPageContent()}</main>
      <footer style={{ flex: "0 0 auto" }}>3</footer>
    </>
  );
};

export default App;
