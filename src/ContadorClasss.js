import React from "react";

class ContadorClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contador: 0 };
  }

  incrementar = () => {
    // aqui la funcion incrementa el valor de contador
    this.setState({ contador: this.state.contador + 1 });
  };

  resetear = () => {
    this.setState({ contador: 0 });
  };
  render() {
    return (
      <div className="col text-center">
        <div className="card ">
          <div className="card-body">
            <p>El contador creado a partir de un componente de clase va en :</p>
            <h1>{this.state.contador}</h1>
            <button className="btn btn-success m-2" onClick={this.incrementar}>
              Incrementar
            </button>
            <button
              className="btn btn-secondary text-light"
              onClick={this.resetear}
            >
              Resetear
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ContadorClass;
