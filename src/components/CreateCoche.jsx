import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {
    url = Global.urlCoches
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false
    }

    crearCoche = (event) => {
        event.preventDefault();
        let request = "api/coches/insertcoche"
        let idCoche = parseInt(this.cajaId.current.value);
        let coche = {
            idCoche: idCoche,
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImagen.current.value
        }
        axios.post(this.url + request, coche).then(response => {
            console.log("creado")
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (<div>
            {
                this.state.status === true &&
                <Navigate to="/" />
            }
            <h3>Crear Coche</h3>
            <form>
                <label>Id Coche:</label>
                <input type='text' ref={this.cajaId} className='form-control' />
                <label>Marca:</label>
                <input type='text' ref={this.cajaMarca} className='form-control' />
                <label>Modelo:</label>
                <input type='text' ref={this.cajaModelo} className='form-control' />
                <label>Conductor:</label>
                <input type='text' ref={this.cajaConductor} className='form-control' />
                <label>Imagen:</label>
                <input type='text' ref={this.cajaImagen} className='form-control' />
                <button className='btn btn-success' onClick={this.crearCoche}>Crear coche</button>
            </form>

        </div>
        )
    }
}
