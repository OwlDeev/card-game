import React from 'react';
import "./Tablero.css";

function Tablero({mazoState}) {
  return (
    <div className='bodyTablero'>
      <ul>
        {mazoState.map((carta) => (
          <li
            key={carta.numero}
            style={
              carta.usando === true
                ? { textDecoration: "line-through" }
                : {}
            }
          >
            {carta.numero + carta.tipo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tablero;