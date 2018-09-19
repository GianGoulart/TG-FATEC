import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {logout} from '../../config/auth'
import { browserHistory } from 'react-router';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Store from '../../store/store';
import thunkMiddleWare from 'redux-thunk';
import { atletas } from '../../reducers/functionsReductors';


const appTokenKey = "appToken"; // also duplicated in Login.js
const store = createStore(atletas, applyMiddleware(thunkMiddleWare));

class VerTime extends Component{
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.buscarAtletas = this.buscarAtletas.bind(this)
        this.state = {
            atletasList : []
        }
    } 
       
    handleLogout() {
        logout().then(function () {
            localStorage.removeItem(appTokenKey);
            browserHistory.push("/");
        });
    }

    componentWillMount(){
        this.buscarAtletas();
        store.subscribe(() => {
            this.state.atletasList =  store.getState()
        });   
        console.log(this.state.atletasList)

    }
    componentWillReceiveProps(){
        this.setState({atletasList: store.getState()})
        console.log(this.state.atletasList)

    }

    buscarAtletas(){
        store.dispatch(Store.buscarAtletas());
        console.log("aqui")
    }
    
    render(){
        return(
            <div id="myteam">
                <MenuCabecalho/>
                <div id="wrapper" className="wrapper mt-6" >
                    <MenuLateral/>
                    <div className="mt-2 content-wrapper" id="page-content-wrapper">
                        <div className="box box-info container">
                            <div className="box-header with-border">
                                <h3 className="box-title">Meus Atletas  <i className="fa fa-users"></i></h3>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{width: "20px"}}>Numero</th>
                                            <th>Nome</th>
                                            <th>Time</th>
                                            <th>Posicao</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.atletasList.map((atleta)=>{
                                        <tr key = {atleta.idAtleta}>
                                            <td>1.</td>
                                            <td>atleta.nome</td>
                                            <td><span className="badge bg-red">Time</span></td>
                                            <td><span className="badge bg-red">Posicao</span></td>
                                        </tr>
                                    })}                                        
                                    </tbody>
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
