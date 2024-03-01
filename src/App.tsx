import React from "react";

const App: React.FC = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <a href="#">Главная</a>
            <a href="#">Суды</a>
            <a href="#">Помощь</a>
          </nav>
          <div>
            <a href="#">G</a>
            <a href="#">T</a>
          </div>
        </div>
      </header>
      <main style={{ flex: "1 0 auto" }}>2</main>
      <footer style={{ flex: "0 0 auto" }}>3</footer>
    </>
  );
};

export default App;
