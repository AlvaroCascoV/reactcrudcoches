import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams, useLocation } from 'react-router-dom'
import HomeCoches from './components/HomeCoches'
import MenuCoches from './components/MenuCoches'
import DetallesCoche from './components/DetallesCoche'
import CreateCoche from './components/CreateCoche'
import UpdateCoche from './components/UpdateCoche'

export default class Router extends Component {
    render() {
        function DetallesElement() {
            let { idcoche } = useParams();
            return (<DetallesCoche idcoche={idcoche} />)
        }
        function UpdateWrapper() {
            const location = useLocation();
            const idState = location && location.state ? location.state.idCoche : undefined;
            return (<UpdateCoche idCoche={idState} />);
        }

        return (
            <BrowserRouter>
                <MenuCoches />
                <Routes>
                    <Route path="/" element={<HomeCoches />} />
                    <Route path="/create" element={<CreateCoche />} />
                    <Route path="/update" element={<UpdateWrapper />} />
                    <Route path="/detalles/:idcoche" element={<DetallesElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}