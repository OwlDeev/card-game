// import { Button } from "@mui/material";
import React from "react";

const Mazo = ({ mazoState, setMazo }) => {

  function crearMazo() {
    for (let index = 0; index < mazoState.length; index++) {
      const element = mazoState[index];
      console.log(element);
    }
  }

  return (
    <div>
      <button onClick={crearMazo}>Crear el mazo</button>
    </div>
  );

};

export default Mazo;
