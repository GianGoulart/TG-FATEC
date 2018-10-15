import React, { Component } from 'react';
import MenuLateral from './menu/MenuLateral';
import MenuCabecalho from './menu/MenuCabecalho'
import HomeContent from './HomeContent';
import { toogleMenuScript } from '../scripts/javascript';
import {browserHistory} from 'react-router';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            //firebaseUser: JSON.parse(localStorage.getItem("firebaseUser"))
        };
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
        this.token = localStorage.getItem("appToken") 
    }
    render(){
        if(!this.token){       
            browserHistory.push('/login')
            return null
        }
        else{
            return(           
                <div id="home">
                    <MenuCabecalho  exibirMenuLateral={true}/>
                    <MenuLateral {...this.props} renderizarComponente={this.renderizarComponente.bind(this)}/>                   
                </div>
            )
    
        }
    }
}

export default Home