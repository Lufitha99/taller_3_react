import React, { useState } from "react";

function FormularioProducto({ agregarProducto }) {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    agregarProducto({ nombreProducto, precio });
    setNombreProducto("");
    setPrecio("");
  };

  return (
    <div className="col-5">
      <h1>Formulario</h1>
      <form onSubmit={manejarEnvio} className="mb-3">
        <div className="form-group">
          <label className="form-label">Nombre de producto</label>
          <input
            placeholder="Nombre de producto"
            className="form-control"
            type="text"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input
            placeholder="Precio"
            className="form-control"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Agregar Producto
        </button>
      </form>
    </div>
  );
}
export default FormularioProducto;
