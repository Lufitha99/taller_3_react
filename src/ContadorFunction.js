import React, { useState } from "react";

function ContadorFunction() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };
  const resetear =() =>{
    setContador(0)
  }
  return (
    <div className="col text-center">
      <div className="card">
        <div className="card-body">
          <p>El contador creado a partir un componente funcional va en:</p>
          <h1>{contador}</h1>
          <button className="btn btn-primary m-2" onClick={incrementar}>Incrementar</button>
          <button className="btn btn-secondary text-light" onClick={resetear}>Resetear</button>
        </div>

      </div>
    </div>
  );
}

export default ContadorFunction;