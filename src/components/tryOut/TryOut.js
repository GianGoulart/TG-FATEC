import React, { Component } from 'react';
import ContentTryOut from './ContentTryOut';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import { toogleMenuScript } from '../../scripts/javascript';

class TryOut extends Component{
    constructor(props) {
        super(props);

    }    

    renderizarComponente() {
        return (
            <div>
                <ContentTryOut {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
    }

    render(){
        return(
        <div id="tryout">
            <MenuCabecalho  exibirMenuLateral={true}/>
            <MenuLateral  {...this.props} renderizarComponente={this.renderizarComponente.bind(this)}/>
        </div>
        )
    }
}


export default TryOut

