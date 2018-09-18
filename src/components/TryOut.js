import React, { Component } from 'react';
import {logout} from '../config/auth'
import { browserHistory } from 'react-router';
import  axios from 'axios';
import Candidato from './tryOut/Candidato';
import MenuCabecalho from './menu/MenuCabecalho';
import MenuLateral from './menu/MenuLateral';
import Resultados from './tryOut/Resultados';


const appTokenKey = "appToken"; // also duplicated in Login.js
class TryOut extends Component{
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.saveTest = this.saveTest.bind(this)
        this.state = {
            nome:"",nascimento:"",email:"",posicao:"",impulsao:"",forca:"",velocidade:"",
            time:"",
            ataque : [
                {id:"QB",   item: "Quarterback"}, 
                {id:"RB",   item:"Runningback"}, 
                {id:"FB",   item: "Fullback"},  
                {id:"WR",   item: "Wide Receiver"}, 
                {id:"TE",   item: "Tight End"}, 
                {id:"C" ,   item: "Center"}, 
                {id:"G" ,   item: "Guard"},
                {id:"OT",   item: "Ofensive Tackle"}
            ],
            defesa :[ 
                {id:"DT",   item: "Defensive Tackle"}, 
                {id:"DE",   item: "Defensive End"}, 
                {id:"LB",   item: "Linebacker"},
                {id:"CB",   item: "Cornerback"}, 
                {id:"SS",   item: "Strong Safety"}, 
                {id:"FS",   item: "Free Safety"}
            ]


        }

    }    
    handleLogout() {
        logout().then(function () {
            localStorage.removeItem(appTokenKey);
            browserHistory.push("/");
            console.log("user signed out from firebase");
        });

    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(state)
    }

    saveTest(e){
        e.preventDefault()
        var dados = {
            "nome":this.state.nome,
            "nascimento":this.state.nascimento,
            "posicao":this.state.posicao,
            "email":this.state.email,
            "velocidade":this.state.velocidade,
            "impulso":this.state.impulsao,
            "forca":this.state.forca
        }
        axios({
            method: 'post',
            url: 'http://localhost:8181/insereAvaliacao',
            data: dados
            })
            .then(res=>{
                alert("Dados cadastrados")
            })
            .catch(function (error) {
            console.log(error);
            });    }   

    render(){
        return(
        <div id="tryout">
            <MenuCabecalho/>
            <div id="wrapper" className="wrapper mt-6" >
                <MenuLateral/>
                <div className="mt-2 content-wrapper" id="page-content-wrapper">
                    <Candidato/>
                    <Resultados/>
                </div>
            </div>  
        </div>
        )
    }
}

export default TryOut
