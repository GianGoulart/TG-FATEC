import React, { Component } from 'react';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GraficosTryOutContainer from './GraficosTryOut';
import { toogleMenuScript } from '../../scripts/javascript';
import {browserHistory} from 'react-router';

class ViewGraficos extends Component{
    constructor(props) {
        super(props);

    } 
    renderizarComponente() {
        return (
            <div>
                <GraficosTryOutContainer {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
        this.props.buscarCandidatos();
        this.props.buscarMedias();
    }

  
    render(){
        if(localStorage.getItem("appToken")){
            return(
                <div id="graficos">
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

const mapStateToProps = state => {
    return { store: state }
};

const mapDispatchToProps = dispatch => {
    return {
        buscarCandidatos() {
            dispatch(Store.buscarCandidatos());
        },
        buscarMedias(){
            dispatch(Store.buscarMedias());
        },        
        buscarMediasCandidato(event, dados){ 
            dispatch(Store.buscarMediasCandidato(dados))
        },  
        buscarPosicoesAtletas(id){
            dispatch(Store.buscarPosicoesAtletas(id))
        }
    }
}

ViewGraficos.contextTypes = {
    store: PropTypes.object.isRequired
}

const ViewGraficosContainer = connect(mapStateToProps, mapDispatchToProps)(ViewGraficos);

export default ViewGraficosContainer
