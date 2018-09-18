import React, { Component } from 'react';
import {logout} from '../../config/auth'
import { browserHistory } from 'react-router';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';

const appTokenKey = "appToken"; // also duplicated in Login.js
class VerTime extends Component{
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    } 
       
    handleLogout() {
        logout().then(function () {
            localStorage.removeItem(appTokenKey);
            browserHistory.push("/");
            console.log("user signed out from firebase");
        });

    }
    
    render(){
        return(
            <div id="myteam">
                <MenuCabecalho/>
                <div id="wrapper" className="wrapper mt-6" >
                    <MenuLateral/>
                    <div className="mt-2 content-wrapper" id="page-content-wrapper">
                        <div class="box box-info container">
                            <div class="box-header with-border">
                                <h3 class="box-title">Meus Atletas  <i className="fa fa-users"></i></h3>
                            </div>
                            <div class="box-body">
                                <table class="table table-bordered">
                                    <tr>
                                        <th style={{width: "20px"}}>Numero</th>
                                        <th>Nome</th>
                                        <th>Time</th>
                                        <th>Posicao</th>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Update software</td>
                                        <td><span class="badge bg-red">Ataque</span></td>
                                        <td><span class="badge bg-red">Quaterback</span></td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Update software</td>
                                        <td><span class="badge bg-yellow">Defesa</span></td>
                                        <td><span class="badge bg-yellow">Safety</span></td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Update software</td>
                                        <td><span class="badge bg-blue">Especial</span></td>
                                        <td><span class="badge bg-blue">Punter</span></td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Update software</td>
                                        <td><span class="badge bg-red">Ataque</span></td>
                                        <td><span class="badge bg-red">Wide-Receiver</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

export default VerTime
