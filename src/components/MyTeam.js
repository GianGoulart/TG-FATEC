import React, { Component } from 'react';
import {logout} from '../config/auth'
import { browserHistory } from 'react-router';
import MenuCabecalho from './menu/MenuCabecalho';
import MenuLateral from './menu/MenuLateral';

const appTokenKey = "appToken"; // also duplicated in Login.js
class MyTeam extends Component{
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
                        <div className="container row"/*{this.state.groupAcess === '"ADMINISTRADOR"' ? "container row" : "container "} style={{ marginLeft: "5%" }}*/>
                            <div className= "col-sm-4 text-center  mb-4 "/*{this.state.groupAcess === '"ADMINISTRADOR"' ? "col-sm-4 text-center  mb-4" : "col-sm-12 text-center mb-4"}*/>
                                <a href="/myTeam/myTeam">
                                <div class="box box-info">
                                    <div class="box-header with-border">
                                        <h3 class="box-title">Ver meu time</h3>
                                        <div class="box-body">
                                            <i class="far fa-list-alt fa-5x"></i>
                                        </div>
                                        <div className="box-footer">
                                            <label>Verifique, cadastre e analise os jogadores</label>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <br />
                            </div>
                            <div className="col-sm-4 text-center mb-4">
                                <a href="/tryOut/novo">
                                <div class="box box-info">
                                    <div class="box-header with-border">
                                        <h3 class="box-title">Cadastrar novo atleta</h3>
                                        <div class="box-body">
                                            <i class="fas fa-user-plus fa-5x"></i>
                                        </div>
                                        <div className="box-footer">
                                            <label>Cadastre as estatisticas dos candidatos avaliados</label>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <br />
                            </div>
                            <div className="col-sm-4 text-center mb-4">
                                <a href="/tryOut/novo">
                                <div class="box box-info">
                                    <div class="box-header with-border">
                                        <h3 class="box-title">Dados da equipe</h3>
                                        <div class="box-body">
                                            <i class="fas fa-chart-bar fa-5x"></i>
                                        </div>
                                        <div className="box-footer">
                                            <label>Cadastre as estatisticas dos candidatos avaliados</label>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

export default MyTeam