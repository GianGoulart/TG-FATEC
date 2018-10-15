import React, { Component } from 'react';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Content from './Content';
import { toogleMenuScript } from '../../scripts/javascript';
import {browserHistory} from 'react-router';

class MyTeam extends Component{
    constructor(props) {
        super(props);
    } 
       
    renderizarComponente() {
        return (
            <div>
                <Content {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
    }

    render(){
        if(localStorage.getItem("appToken")){
            return(
                <div id="myteam">
                    <MenuCabecalho  exibirMenuLateral={true}/>
                    <MenuLateral {...this.props} renderizarComponente={this.renderizarComponente.bind(this)}/>                   
                </div>        
            )
        }else{
            browserHistory.push("/login")
            return null
        }
    }
}

export default MyTeam