import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2 - Importando componentes
import FirstComponent from "./compents/FirstComponent";

// 4 - template expression
import TemplateExpression from "./compents/TemplateExpression";

// 5 - Hierarquia de componentes
import MyComponent from "./compents/MyComponent";

// 6 - Eventos
import Events from "./compents/Events";

function App() {
  const [count, setCount] = useState(0);

  // 4 - Template expression
  const name = "Lucas";

  const data = {
    age: 31,
    job: "Programador",
  };

  //

  return (
    <>
      <div className="App">
        {/* 3 - Comentarios JSX */}
        <h1>Fundamentos do React</h1>
        <h2>Testando</h2>
        <p>A soma e {2 + 2}</p>
        <p>
          Sua idade {data.age} e seu trabalho {data.job} então meu nome e {name}
        </p>
        <FirstComponent />
        <MyComponent />
        <Events />
      </div>
    </>
  );
}

export default App;
