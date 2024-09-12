import React from "react";
import Producto from "./Producto";
import defaultImg from "./assets/default.jpg"

function ListaDeProductos({ productos }) {
  return (
    <div className="row">
      {productos.map((producto, index) => (
        <Producto
          key={index}
          nombreProducto={producto.nombreProducto}
          url={defaultImg}
          precio={producto.precio}
        />
      ))}
    </div>
  );
}
export default ListaDeProductos;