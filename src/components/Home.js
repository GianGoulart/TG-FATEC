import React, { Component } from 'react';
import {logout} from '../config/auth'
import { browserHistory } from 'react-router';
import MenuLateral from './menu/MenuLateral';
import MenuCabecalho from './menu/MenuCabecalho'
import HomeContent from './HomeContent';
import { toogleMenuScript } from '../scripts/javascript';


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
    renderizarComponente() {
        return (
            <div>
                <HomeContent {...this.props}/>
            </div>
        )
    }
    
    componentWillMount(){
        toogleMenuScript();
    }
    render(){
        return(           
            <div id="home">
                <MenuCabecalho  exibirMenuLateral={true}/>
                <MenuLateral {...this.props} renderizarComponente={this.renderizarComponente.bind(this)}/>                   
            </div>
        )
    }
}

export default Home