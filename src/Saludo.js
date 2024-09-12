import React from "react";

function Saludo(props) {
  return (
    <div className="col-5">
      <h1>Hola {props.nombre} Bienvenido/a!</h1>
    </div>
  );
}
export default Saludo;
