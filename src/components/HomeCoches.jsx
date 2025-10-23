import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import DetallesCoche from './DetallesCoche';
import { Link } from 'react-router-dom';

export default class HomeCoches extends Component {
    url = Global.urlCoches;

    getCoches = () => {
        let request = "api/coches"
        axios.get(this.url + request).then(response => {
            console.log("leyendo coches")
            this.setState({
                coches: response.data
            })
        })
    }

    deleteCoche = (idCoche) => {
        let request = "api/coches/deletecoche/" + idCoche;
        axios.delete(this.url + request).then(response => {
            console.log("Delete " + idCoche);
            this.getCoches();
        })
    }

    state = {
        coches: [],
        idCoche: null,
    }

    componentDidMount = () => {
        this.getCoches();
    }

    render() {
        return (<div>
            <h2>Home coches</h2>
            {
                this.state.idCoche &&
                <DetallesCoche idcoche={this.state.idCoche} />
            }
            <div>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>ID:</th>
                            <th>Marca:</th>
                            <th>Modelo:</th>
                            <th>Accion:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coches.map((coche, index) => {
                                return (<tr key={index}>
                                    <td>{coche.idCoche}</td>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>
                                        <button className='btn btn-danger' value={coche.idCoche}
                                            onClick={() => {
                                                this.deleteCoche(coche.idCoche)
                                            }}>Delete</button>
                                        <button className='btn btn-info' value={coche.idCoche}
                                            onClick={() => {
                                                this.setState({
                                                    idCoche: coche.idCoche
                                                })
                                            }}>Detalles</button>
                                        <Link className='btn btn-warning' to="/update" state={{ idCoche: coche.idCoche }}>Update</Link>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>)
    }
}
