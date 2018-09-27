import React, { Component } from 'react';
import { Link} from 'react-router';

export default class MenuCabecalho extends Component {
    reload(evento) {
        evento.preventDefault();
        this.props.reload();
    }
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark bg-dark">

                <Link className="navbar-brand" to="/home" onClick={this.reload.bind(this)} >
                    <h4>Football Manager </h4>
                </Link>

                {this.props.exibirMenuLateral &&
                    <ul id="menu-toggle" className="navbar-nav">
                        <a id="sidebarCollapse" className="hamburguer">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </ul>
                }
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout"><i className="fas fa-sign-out-alt"></i> Sair</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}