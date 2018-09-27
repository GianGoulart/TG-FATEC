import React, { Component } from 'react';

export default class TableTeam extends Component {
    render(){
        return(
            
                <div className="box box-info container">
                    <div className="box-header with-border">
                        <h3 className="box-title">Meus Atletas  <i className="fa fa-users"></i></h3>
                    </div>
                    <div className="box-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{width: "20px"}}>Numero</th>
                                    <th>Nome</th>
                                    <th>Time</th>
                                    <th>Posicao</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.store.atletas.map((atleta)=>(
                                
                                <tr key={atleta.idAtleta}>
                                    <td>{atleta.idAtleta}.</td>
                                    <td>{atleta.nome}</td>
                                    <td><span className="badge bg-red">{atleta.team}</span></td>
                                    <td><span className="badge bg-red">{atleta.posicao}</span></td>
                                </tr>
                            ))  }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}