import React, { Component } from 'react';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableResultados from './TableResultados';
import { toogleMenuScript } from '../../scripts/javascript';
import GraficosTryOutContainer from './GraficosTryOut';
import {browserHistory} from 'react-router';

class ViewResultados extends Component{
    constructor(props) {
        super(props);

    } 
    renderizarComponente() {
        return (
            <div>
                <TableResultados {...this.props}/>
                <GraficosTryOutContainer {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
        this.props.buscarResultados(2);
        this.props.buscarPosicoesAtletas(0)
        this.props.buscarMedias();
        this.props.buscarCandidatos();
    }

  
    render(){
        if(localStorage.getItem("appToken")){
            return(
                <div id="myteam">
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
        buscarResultados(id) {
            dispatch(Store.buscarResultados(id));
        },
        buscarPosicoesAtletas(id){
            dispatch(Store.buscarPosicoesAtletas(id));
        },
        buscarMedias(){
            dispatch(Store.buscarMedias());
        },
        buscarCandidatos() {
            dispatch(Store.buscarCandidatos());
        },
        buscarMediasCandidato(event, dados){ 
            dispatch(Store.buscarMediasCandidato(dados))
        },  
        class(posicao, resultado){             
            this.store.medias.map((media)=>{
                if (media.posicao == posicao){
                    var result = 0 
                    if( parseFloat(media.quarentaJardas) > parseFloat(resultado.quarentaJardas)){
                        result = result + 1
                    }else if( parseFloat(media.quarentaJardas) < parseFloat(resultado.quarentaJardas)){
                        result = result - 1
                    }

                    if( parseFloat(media.supino).toFixed(4) < parseFloat(resultado.supino).toFixed(4)){
                        result = result + 1
                    }else if( parseFloat(media.supino).toFixed(4) > parseFloat(resultado.supino).toFixed(4)){
                        result = result - 1
                    }
                    
                    if(parseFloat(media.saltoVertical) < parseFloat(resultado.saltoVertical)){
                        result = result + 1
                    }else if(parseFloat(media.saltoVertical) > parseFloat(resultado.saltoVertical)){
                        result = result - 1
                    }

                    if(parseFloat(media.saltoHorizontal)< parseFloat(resultado.saltoHorizontal)){
                        result = result + 1
                    }else if(parseFloat(media.saltoHorizontal)> parseFloat(resultado.saltoHorizontal)){
                        result = result - 1
                    }
                    this.store.result = result
                    return this.store.result
                }
            })
        }
    }
}

ViewResultados.contextTypes = {
    store: PropTypes.object.isRequired
}

const ViewResultadosContainer = connect(mapStateToProps, mapDispatchToProps)(ViewResultados);

export default ViewResultadosContainer
