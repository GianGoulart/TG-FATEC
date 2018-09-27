import React, { Component } from 'react';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormCandidato from './FormCandidato';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import { toogleMenuScript } from '../../scripts/javascript';

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
        return(
            <div id="candidato">
                <MenuCabecalho  exibirMenuLateral={true}/>
                <MenuLateral {...this.props} renderizarComponente={this.renderizarComponente.bind(this)}/>                   
            </div>        

        )
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
        cadastrarPosicoes(){
            dispatch(Store.cadastrarPosicoes(posicoes, idAtleta));            
        }
    }
}

Candidato.contextTypes = {
    store: PropTypes.object.isRequired
}

const CandidatoContainer = connect(mapStateToProps, mapDispatchToProps)(Candidato);



export default CandidatoContainer