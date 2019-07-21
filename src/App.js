import React, { Component } from "react";
import "./bootstrap.min.css";

// Importamos los componentes
import Header from "./Components/Header";
import NuevaCita from "./Components/NuevaCita";
import ListaCitas from "./Components/ListaCitas";

class App extends Component {
    state = {
        citas: []
    };

    // Cuando la applicacion carga
    componentDidMount() {
       console.log("antes de montar el componente");
        const citasLS = localStorage.getItem('citas');
        if (citasLS) {
            this.setState({
                citas : JSON.parse(citasLS)
            })
        }
    }

    // cuando eliminamos o introducimos una cita
    componentDidUpdate() {
      console.log("al acutalizar los compoenentes" +this.state.citas);
        localStorage.setItem('citas', JSON.stringify(this.state.citas));
    }

    crearNuevaCita = datos => {
        // Copiar el state actual
        const citas = [...this.state.citas, datos];
        //agregar el nuevo state
        this.setState({
            citas
        });
    };

    // elimina las citas del state
    eliminarCita = id => {
        // Tomar una copia del State
        const citasActuales = [...this.state.citas];
        // utilizar filter luego
        const citas = citasActuales.filter(cita => cita.id !== id);
        // actualizar el state
        this.setState({ citas });
    };

    render() {
        return (
            <div className="container">
                <Header titulo="Administrador Pacientes Veterinaria " />

                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <NuevaCita crearNuevaCita={this.crearNuevaCita} />
                    </div>

                    <div className="mt-5 col-md-10 mx-auto">
                        <ListaCitas
                            citas={this.state.citas}
                            eliminarCita={this.eliminarCita}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
