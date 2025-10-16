import React from "react";

const Events = () => {
  const handleClick = () => {
    console.log("Executando");
  };

  // 8 - Funcao de renderizacao
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Renderizando 2</h1>;
    }
  };

  // return 10 > 2 && <p>Carregando....</p>;

  return (
    <div>
      <div>
        <button onClick={() => console.log("testando um evento")}>
          clique aqui
        </button>
      </div>
      {/* 7 - Evento com funcao */}
      <div>
        <button onClick={handleClick}>Aqui com funcao</button>
      </div>
      {/* 8 - Funcao com render */}
      <div>{renderSomething(true)}</div>
      <div>{renderSomething(false)}</div>
    </div>
  );
};

export default Events;
