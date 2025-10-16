import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2 - Imagem em assets
import entrega from "./assets/IMG_6475.JPEG";

// 3 - useState
import Data from "./components/Data";

// 4 - Listagem
import ListRender from "./components/ListRender";

// 7 - Render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";

// 9 - desestrutrando props
import CadDetails from "./components/CadDetails";

// 11 - Renderazicao de Lista com componentes
const cars = [
  { id: 1, brand: "Ferrai", color: "Amarelo", km: 10 },
  { id: 2, brand: "KIA", color: "Azul", km: 150000 },
  { id: 3, brand: "Honda", color: "Branco", km: 120000 },
];

// 12 - Fragments
import Frangment from "./components/Frangment";

// 13 - Children
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Avancando em React</h1>
        {/* 1 - Imagem em public */}
        <img src="/IMG_6511.JPEG" alt="Entrega de Estagio" />
        {/* 2 - imagem em assets */}
        <img src={entrega} alt="Outra imagen" />
        {/* 3 - useData */}
        <Data />
        {/* 4 - Listagem */}
        <ListRender />
        {/* 7 - Render condicional */}
        <ConditionalRender />
        {/* 8 - props */}
        <ShowUserName name="Joaow" />
        {/* 9 - desestrutrando props */}
        <CadDetails brand="VW" km={999} color="Vermelho" />
        {/* 10 - reaproveitando de componentes */}
        <CadDetails km={9857} color="Azul" brand="XCM" />
        {/* 11 - renderizacao de lista de componentes */}
        {cars.map((car) => (
          <CadDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
        {/* 12 - Fragments */}
        <Frangment />
        {/* 13 - Children */}
        <Container>
          <p>Alguma coisa </p>
        </Container>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
