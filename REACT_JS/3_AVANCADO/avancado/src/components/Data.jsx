import { useState } from "react";

const Data = () => {
  let someData = 10;

  const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 5)}>Mudar</button>
      <p>Valor: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(20)}>Mudar State</button>
    </div>
  );
};

export default Data;
