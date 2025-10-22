import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Form em React</h1>
        <MyForm userName="Matheus" userEmail="mateus@gmail.com" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
