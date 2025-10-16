import React from "react";

const ConditionalRender = () => {
  const x = 5;

  const name = "Mateus";

  return (
    <div>
      {/* 7 - render condicional */}

      <h3>Exibir</h3>
      {x > 2 && <p>Se x for true sim!</p>}

      {/* 8 - Else */}
      <h3>Render ternario</h3>
      {name == "Joao" ? (
        <div>
          <p>Olá Joao</p>
        </div>
      ) : (
        <div>
          <p>Nome nao encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
