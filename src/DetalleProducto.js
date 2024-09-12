import React from "react";

function DetalleProducto(props) {
  return (
    <div className="col-4 border pt-4">
      <h1 className="text-center">{props.nombre}</h1>
      <img  src={props.url} alt={props.nombre} style={{ width: '100%'}}/>
      <h3 >{props.precio}</h3>
      <p>
        {props.descripcion}
      </p>
    </div>
  );
}

export default DetalleProducto;
