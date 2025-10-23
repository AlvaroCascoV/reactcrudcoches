import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./app/logo.svg"

export default class MenuCoches extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} style={{ width: "60px" }} alt="Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page"
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create">
                                    Create Coche
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}