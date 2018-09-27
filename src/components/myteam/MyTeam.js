import React, { Component } from 'react';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Content from './Content';
import { toogleMenuScript } from '../../scripts/javascript';


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
        return(
            <div id="myteam">
                <MenuCabecalho  exibirMenuLateral={true}/>
                <MenuLateral {...this.props} renderizarComponente={this.renderizarComponente.bind(this)}/>                   
            </div>        
        )
    }
}

export default MyTeam