import React, { Component } from 'react';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import { toogleMenuScript } from '../../scripts/javascript';
import FormAddTeam from './FormAddTeam';
import {browserHistory} from 'react-router';

class AddTeam extends Component{
    constructor(props){
        super(props)
    }

    renderizarComponente() {
        return (
            <div>
                <FormAddTeam {...this.props}/>
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
        cadastrarAtleta(dados, e){
            e.preventDefault()
            dispatch(Store.cadastrarAtleta(dados));
        },
        buscarCandidatos() {
            dispatch(Store.buscarCandidatos());
        },
        cadastrarTelefones(dados){
            dispatch(Store.cadastrarTelefones(dados))
        }
    }
}

AddTeam.contextTypes = {
    store: PropTypes.object.isRequired
}

const AddTeamContainer = connect(mapStateToProps, mapDispatchToProps)(AddTeam);

export default AddTeamContainer