import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeCoches from './components/HomeCoches'
import MenuCoches from './components/MenuCoches'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuCoches />
                <Routes>
                    <Route path="/" element={<HomeCoches />} />

                </Routes>
            </BrowserRouter>
        )
    }
}