import * as React from "react";
import { useState } from "react";
import "./index.css";
import Mazo from "./components/Mazo";
import { MazoCartas } from "./MazoCartas";
import Tablero from "./components/Tablero/Tablero";
import Carta from "./components/Carta"

function App() {
  const [mazoState, setMazo] = useState(MazoCartas);

  return (
    <div className="App">
      <Tablero mazoState={mazoState}></Tablero>
      <Carta></Carta>
      <Mazo setMazo={setMazo} mazoState={mazoState}></Mazo>
    </div>
  );
}

export default App;
