import React, { Component } from 'react';
import { browserHistory} from 'react-router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/js/bootstrap.bundle.min'


export default class MenuCabecalho extends Component {
    logout(){
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('nameUser');
        sessionStorage.removeItem('groupUser');


        browserHistory.push('/')
    }

    render() {
        return (
            <header className="main-header sidebar-mini">
                <a href="/home" className="logo">
                    <span className="logo-mini"><b>Foot</b>Man</span>
                    <span className="logo-lg text-left">Football Manager</span>
                </a>
                <nav className="navbar navbar-static-top">
                <a href="#" className="fas fa-bars pull-left" data-toggle="push-menu" role="button">
                </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            
                        <li className="nav-item">
                            <a className="nav-link" style={{color:"azure"}} href="/" onClick ={this.logout}><i className="fas fa-sign-out-alt"></i> Sair</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}