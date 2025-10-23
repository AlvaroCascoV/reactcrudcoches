import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class UpdateCoche extends Component {
    url = Global.urlCoches
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false
    }

    componentDidMount = () => {
        if (this.props.idCoche) {
            let request = "api/Coches/FindCoche/" + this.props.idCoche;
            axios.get(this.url + request).then(response => {
                const coche = response.data;
                if (this.cajaId.current) this.cajaId.current.value = coche.idCoche;
                if (this.cajaMarca.current) this.cajaMarca.current.value = coche.marca;
                if (this.cajaModelo.current) this.cajaModelo.current.value = coche.modelo;
                if (this.cajaConductor.current) this.cajaConductor.current.value = coche.conductor;
                if (this.cajaImagen.current) this.cajaImagen.current.value = coche.imagen;
            })
        }
    }

    crearCoche = (event) => {
        event.preventDefault();
        let request = "api/coches/updatecoche"
        let idCoche = parseInt(this.props.idCoche);
        let coche = {
            idCoche: idCoche,
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImagen.current.value
        }
        axios.put(this.url + request, coche).then(response => {
            console.log("updated")
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
            <h3>Actualizar Coche</h3>
            <form>
                <label>Id Coche:</label>
                <input type='text' ref={this.cajaId} className='form-control' defaultValue={this.props.idCoche} disabled />
                <label>Marca:</label>
                <input type='text' ref={this.cajaMarca} className='form-control' />
                <label>Modelo:</label>
                <input type='text' ref={this.cajaModelo} className='form-control' />
                <label>Conductor:</label>
                <input type='text' ref={this.cajaConductor} className='form-control' />
                <label>Imagen:</label>
                <input type='text' ref={this.cajaImagen} className='form-control' />
                <button className='btn btn-success' onClick={this.crearCoche}>Actualizar coche</button>
            </form>

        </div>
        )
    }
}
