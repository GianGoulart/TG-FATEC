import React, { Component } from 'react';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableTeam from './TableTeam';
import { toogleMenuScript } from '../../scripts/javascript';
import {browserHistory} from 'react-router';

class ViewTeam extends Component{
    constructor(props) {
        super(props);

    } 
    renderizarComponente() {
        return (
            <div>
                <TableTeam {...this.props}/>
            </div>
        )
    }

    componentWillMount(){
        toogleMenuScript();
        this.props.buscarPosicoesAtletas(0)
        this.props.buscarMedias();
        this.props.buscarResultados(1);
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
        buscarPosicoesAtletas(idAtleta){
            dispatch(Store.buscarPosicoesAtletas(idAtleta));
        },
        buscarMedias(){
            dispatch(Store.buscarMedias());
        },
        buscarResultados(id) {
            dispatch(Store.buscarResultados(id));
        },
        class(posicao, atleta){             
            this.store.medias.map((media)=>{
                if (media.posicao == posicao){
                    var result = 0
                    if( parseFloat(media.quarentaJardas) > parseFloat(atleta.quarentaJardas)){
                        result = result + 1
                    }else if( parseFloat(media.quarentaJardas) < parseFloat(atleta.quarentaJardas)){
                        result = result - 1
                    }

                    if( parseFloat(media.supino).toFixed(4) < parseFloat(atleta.supino).toFixed(4)){
                        result = result + 1
                    }else if( parseFloat(media.supino).toFixed(4) > parseFloat(atleta.supino).toFixed(4)){
                        result = result - 1
                    }
                    
                    if(parseFloat(media.saltoVertical) < parseFloat(atleta.saltoVertical)){
                        result = result + 1
                    }else if(parseFloat(media.saltoVertical) > parseFloat(atleta.saltoVertical)){
                        result = result - 1
                    }

                    if(parseFloat(media.saltoHorizontal)< parseFloat(atleta.saltoHorizontal)){
                        result = result + 1
                    }else if(parseFloat(media.saltoHorizontal)> parseFloat(atleta.saltoHorizontal)){
                        result = result - 1
                    }
                    this.store.result = result
                    return this.store.result
                }
            })
        }
         
    }
}

ViewTeam.contextTypes = {
    store: PropTypes.object.isRequired
}

const ViewTeamContainer = connect(mapStateToProps, mapDispatchToProps)(ViewTeam);


export default ViewTeamContainer
