import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import { data } from "./data/data";
import ImcTable from "./components/ImcTable";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    // console.log(height, weight);

    // if (!weight || !height) return;

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [count, setCount] = useState(0);
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <div className="container">
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <ImcTable
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
