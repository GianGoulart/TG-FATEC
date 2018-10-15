import React, { Component } from 'react';

export default class TableTeam extends Component {

    render(){
        return(            
            <div className="box box-info container">
                <div className="box-header with-border">
                    <h3 className="box-title">Meus Atletas  <i className="fa fa-users"></i></h3>
                </div>
                <div className="box-body">
                    <table className="table table-responsive-sm table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{width: "20px"}}>Numero</th>
                                <th>Nome</th>
                                <th>Posição</th>
                            </tr>
                        </thead> 
                        <tbody>
                        {this.props.store.resultados.map((atleta)=>(                            
                            <tr key={atleta.idAtleta}>
                                <td>{atleta.idAtleta}.</td>
                                <td>{atleta.nome}</td>
                                <td>
                                {this.props.store.posicoesList.map((posicao)=>{         
                                            if(posicao.idAtleta === atleta.idAtleta){
                                                this.props.class(posicao.posicao, atleta)
                                                if(this.props.store.result > 0){
                                                    return <span className="badge bg-green">{posicao.posicao}</span>
                                                }else if (this.props.store.result < 0 ){
                                                    return <span className="badge bg-red">{posicao.posicao}</span>
                                                }else{
                                                    return <span className="badge bg-blue">{posicao.posicao}</span>
                                                }

                                            }
                                        }) } 
                                </td>    
                            </tr>
                        ))  }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}