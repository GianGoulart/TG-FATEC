import React, { Component } from 'react';
import MenuCabecalho from '../menu/MenuCabecalho';
import MenuLateral from '../menu/MenuLateral';
import Store from '../../store/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableTeam from './TableTeam';
import { toogleMenuScript } from '../../scripts/javascript';

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
        this.props.buscarAtletas();
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

const mapStateToProps = state => {
    return { store: state }
};

const mapDispatchToProps = dispatch => {
    return {
        buscarAtletas() {
            dispatch(Store.buscarAtletas());
        },
    }
}

ViewTeam.contextTypes = {
    store: PropTypes.object.isRequired
}

const ViewTeamContainer = connect(mapStateToProps, mapDispatchToProps)(ViewTeam);


export default ViewTeamContainer
