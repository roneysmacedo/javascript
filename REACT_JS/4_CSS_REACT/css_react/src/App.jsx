import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2 - CSS de compomentes
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

function App() {
  // 4 - Inline dinamico
  const n = 15;

  // 5 - Classes dinamicas
  const redTitle = true;

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* 1 - CSS Global */}
        <h1>To aqui</h1>
        {/* 2 - css de componentes */}
        <MyComponents />
        <p>Pegou</p>
        {/* 3 - inline style */}
        <p
          style={{
            color: "blue",
            padding: "25px",
            borderTop: "1px dotted blue",
          }}>
          Este elemento tem estilo inlineee
        </p>
        {/* 4 - inline style dinamico */}
        <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
          css dinamico
        </h2>
        <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
          css dinamico 2
        </h2>
        {/* 5 - Classes dinamicas */}
        <h2 className={redTitle ? "red-title" : "title"}>Vai ter uma classe</h2>
        {/* 6 - Css Modulo */}
        <Title />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
