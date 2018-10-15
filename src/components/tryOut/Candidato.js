import React, { Component } from 'react';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormCandidato from './FormCandidato';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import { toogleMenuScript } from '../../scripts/javascript';
import {browserHistory} from 'react-router';


class Candidato extends Component{
    constructor(props){
        super(props)
      
    }

    renderizarComponente() {
        return (
            <div>
                <FormCandidato {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
        this.props.buscarPosicoes();
    }

    render(){
        if(localStorage.getItem("appToken")){
            return(
                <div id="candidato">
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
        buscarPosicoes() {
            dispatch(Store.buscarPosicoes());
        },
        cadastrarCandidato(dados, e){
            e.preventDefault()
            dispatch(Store.cadastrarCandidato(dados));
        },
        cadastrarPosicoes(posicoes, idAtleta){
            dispatch(Store.cadastrarPosicoes(posicoes, idAtleta));            
        },
    
    }
}

Candidato.contextTypes = {
    store: PropTypes.object.isRequired
}

const CandidatoContainer = connect(mapStateToProps, mapDispatchToProps)(Candidato);



export default CandidatoContainer