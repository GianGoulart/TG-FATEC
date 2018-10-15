import React, { Component } from 'react';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GraficosTeam from './GraficosTeam';
import { toogleMenuScript } from '../../scripts/javascript';
import {browserHistory} from 'react-router';

class ViewGraficosTeam extends Component{
    constructor(props) {
        super(props);

    } 
    renderizarComponente() {
        return (
            <div>
                <GraficosTeam {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
        this.props.buscarAtletas();
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
        buscarAtletas() {
            dispatch(Store.buscarAtletas());
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

ViewGraficosTeam.contextTypes = {
    store: PropTypes.object.isRequired
}

const ViewGraficosTeamContainer = connect(mapStateToProps, mapDispatchToProps)(ViewGraficosTeam);

export default ViewGraficosTeamContainer
