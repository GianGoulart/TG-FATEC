import React, { Component } from 'react';
import { Link} from 'react-router';
import {logout} from '../../config/auth'

export default class MenuCabecalho extends Component {

    constructor(props) {
        super(props);
    }    
  
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark bg-dark">

                <Link className="navbar-brand" to="/home" >
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
                        <a href="#" className="nav-link" onClick={logout}  ><i className="fas fa-sign-out-alt"></i> Sair</a>
                    </li>
                </ul>
            </nav>
        )
    }
}