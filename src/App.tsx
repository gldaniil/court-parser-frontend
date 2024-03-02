import React, { useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Courts from "./pages/Courts";
import Help from "./pages/Help";

const pages: { path: string; component: React.ReactNode }[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/courts",
    component: <Courts />,
  },
  {
    path: "/help",
    component: <Help />,
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
      <Header path={path} onClick={handleNavigationClick} />
      <main className={styles.main}>
        {pages.map((p) => path === p.path && p.component)}
      </main>
      <footer style={{ flex: "0 0 auto" }}>3</footer>
    </>
  );
};

export default App;
