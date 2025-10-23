import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class DetallesCoche extends Component {
    url = Global.urlCoches;

    findCoche = () => {
        let request = "api/Coches/FindCoche/" + this.props.idcoche;
        axios.get(this.url + request).then(response => {
            console.log("leyendo coche " + this.props.idcoche)
            this.setState({
                coche: response.data
            });
        });
    }

    componentDidMount = () => {
        this.findCoche();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idcoche !== this.props.idcoche) {
            this.findCoche();
        }
    }

    state = {
        coche: [],
    }

    render() {
        return (<div>
            <h3 style={{ color: "blue" }}>Detalles id: {this.props.idcoche}</h3>
            {
                this.state.coche &&
                (
                    <ul className='list-group'>
                        <li className='list-group-item'>Marca: {this.state.coche.marca}</li>
                        <li className='list-group-item'>Modelo: {this.state.coche.modelo}</li>
                        <li className='list-group-item'>Conductor: {this.state.coche.conductor}</li>
                        <img src={this.state.coche.imagen} alt='imagen de coche' style={{ width: "150px" }} />
                    </ul>
                )
            }
        </div>)
    }
}
