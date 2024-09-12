import React from "react";

function Producto(props) {
  return (
    <div className="col">
      <div className="card m-1"  style={{ width: '18rem' }}>
        <div className="card-body ">
        <h4 className="card-title text-center">{props.nombreProducto}</h4>

          <img
            class="card-img img-fluid"
            src={props.url}
            style={{ width: '100%', height: 'auto' }}
            alt={props.nombreProducto}
          />
        </div>
        <h3 className="text-center">{props.precio}</h3>
      </div>
    </div>
  );
}
export default Producto;
