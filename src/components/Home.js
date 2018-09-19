import React, { Component } from 'react';
import {logout} from '../config/auth'
import { browserHistory } from 'react-router';
import MenuLateral from './menu/MenuLateral';
import MenuCabecalho from './menu/MenuCabecalho'
import  '../scripts/admin.js';
import  '../scripts/demo.js';

const appTokenKey = "appToken"; // also duplicated in Login.js
class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            //firebaseUser: JSON.parse(localStorage.getItem("firebaseUser"))
        };

        //console.log("User:", this.state.firebaseUser);
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
            <div id="home">
                <MenuCabecalho/>
                <div id="wrapper" className="wrapper mt-6" >
                    <MenuLateral/>
                    <div className="mt-2 container content-wrapper" id="page-content-wrapper">
                        <div className="row"/*{this.state.groupAcess === '"ADMINISTRADOR"' ? "container row" : "container "} style={{ marginLeft: "5%" }}*/>
                            <div className= "col-sm-6 text-center mb-4 "/*{this.state.groupAcess === '"ADMINISTRADOR"' ? "col-sm-4 text-center  mb-4" : "col-sm-12 text-center mb-4"}*/>
                                <a href="/myTeam">
                                <div className="box box-info w-75">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Meu Time</h3>
                                        <div className="box-body">
                                            <i className="far fa-list-alt fa-5x"></i>
                                        </div>
                                        <div className="box-footer">
                                            <label>Verifique, cadastre e analise os jogadores</label>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <br />
                            </div>
                            <div className="col-sm-6 text-center mb-4">
                                <a href="/tryOut/novo">
                                <div className="box box-info w-75">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Try Out </h3>
                                        <div className="box-body">
                                            <i className="fas fa-football-ball fa-5x"></i>
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

export default Home