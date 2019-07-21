import React, { Component } from "react";

class NuevaCita extends Component {
    state = {
        cita: {
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        }
    };

    handleChange = e => {
        console.log(e.target.name + ":" + e.target.value);
        // colocar lo que el usuario escribe en el state

        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        });
    };
    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llene el formulario para crear una nueva cita
                    </h2>
                </div>
                <div className="p-4">
                    <form>
                        {/* Abrimos formGroup */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-4 col-form-label text-right">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        {/* Cerramos formGroup */}
                        {/* Abrimos formGroup */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-4 col-form-label text-right">
                                Nombre Dueño Mascota
                            </label>
                            <div className="col-sm-8 col-lg-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de dueño mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        {/* Cerramos formGroup */}
                        {/* Abrimos formGroup */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label text-right">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label text-right">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        {/* Cerramos formGroup */}

                        {/* Abrimos formGroup */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-4 col-form-label text-right">
                                Sintomas mascota
                            </label>
                            <div className="col-sm-8 col-lg-8">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="describe los Sintomas"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                />
                            </div>
                        </div>
                        {/* Cerramos formGroup */}
                        <input
                            type="button"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar Nueva Cita"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;
