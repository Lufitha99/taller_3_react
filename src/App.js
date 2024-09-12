import React from "react";

// ======= INICIO PUNTO UNO  =======

import Saludo from "./Saludo";

function App() {
  return (
    <div className="row justify-content-center">
      <Saludo nombre="Santiago" />
    </div>
  );
}
export default App;

// ======= FIN PUNTO UNO   =======


// ======= INICIO PUNTO DOS  =======


// import Producto from "./Producto";
// import product1 from "./assets/product1.jpg";
// import product2 from "./assets/product2.jpg";
// function App() {
//   return (
//     <div className="container">
//       <div className="row justify-contents-center">
//         <Producto
//         url={product1}
//         nombreProducto="Camisa"
//         precio="$68.000 COP"
//         />
//         <Producto
//           url={product2}
//           nombreProducto="Tenis Dama"
//           precio="$80.000 COP"
//         />
//       </div>
//     </div>
//   );
// }
// export default App;
// ======= FIN PUNTO DOS   =======


// ======= INICIO PUNTO TRES   =======


// import ContadorClass from "./ContadorClasss"
// import ContadorFunction from "./ContadorFunction"

// function App(){
//   return(
//     <div className="container">
//       <div className="row justify-content-center">
//         <ContadorClass />
//         <ContadorFunction />
//       </div>
//     </div>
//   )

// }
// export default App;

// ======= FIN PUNTO TRES   =======


// ======= INICIO PUNTO CUATRO   =======

// ======= para este punto en lugar de una lista los productos se muestran como tarjetas, ya que asi se creo el componente de producto ======


// import { useState } from "react";
// import ListaDeProductos from "./ListaDeProductos";
// import FormularioProducto from "./FormularioProducto";

// function App() {
//   const [productos, setProductos] = useState([]);

//   const agregarProducto = (producto) => {
//     setProductos([...productos, producto]);
//   };

//   return (
//     <div>
//       <div className="row justify-content-center d-flex">
//         <FormularioProducto agregarProducto={agregarProducto} />
//       </div>
//       <div className="container">
//         <h2 className="text-center"> Productos: </h2>
//         <ListaDeProductos productos={productos} />
//       </div>

//     </div>
//   );
// }
// export default App;

// ======= FIN PUNTO CUATRO   =======


// ======= INICIO PUNTO CINCO   =======


// import DetalleProducto from "./DetalleProducto";
// import tenis from "./assets/tenis.jpg";

// function App() {
//   return (
//     <div className="container">
//       <div className="row mt-2 d-flex justify-content-center">
//         <DetalleProducto
//           nombre="Tenis Duramo SL"
//           url={tenis}
//           precio="$379.000"
//           descripcion="La parte superior contiende al menos un 50% de materiales reciclados. Este producto representa solo una de nuestras soluciones para ayudar a poner fin a los residuos plásticos"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;


// ======= FIN PUNTO CINCO   =======
