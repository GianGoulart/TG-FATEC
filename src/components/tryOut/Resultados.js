import React, { Component } from 'react';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import { toogleMenuScript } from '../../scripts/javascript';
import FormResultados from './FormResultados';
import {browserHistory} from 'react-router';

class Resultados extends Component{
    constructor(props){
        super(props)
    }

    renderizarComponente() {
        return (
            <div>
                <FormResultados {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
        this.props.buscarCandidatos();

    }

    render(){
        if(localStorage.getItem("appToken")){
            return(
                <div id="resultado">
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

        cadastrarAvaliacao(body, event){
            event.preventDefault();
            dispatch(Store.cadastrarAvaliacao(body))
        },
       
    }
}

Resultados.contextTypes = {
    store: PropTypes.object.isRequired
}

const ResultadosContainer = connect(mapStateToProps, mapDispatchToProps)(Resultados);



export default ResultadosContainer