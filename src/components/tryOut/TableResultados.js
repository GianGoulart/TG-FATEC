import React, { Component } from 'react';

export default class TableResultados extends Component {
    render(){
        return(            
                <div className="box box-info container">
                    <div className="box-header with-border">
                        <h3 className="box-title">Avaliações  <i className="fa fa-users"></i></h3>
                    </div>
                    <div className="box-body">
                        <table className="table table-responsive-sm table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Nome</th>
                                    <th>40 Jardas</th>
                                    <th>Força</th>
                                    <th>Salto Horizontal</th>
                                    <th>Salto Vertical</th>
                                    <th>Posições</th>
                                </tr>
                            </thead> 
                            <tbody>
                            {this.props.store.resultados.map((resultado)=>(                                
                                <tr key={resultado.idAtleta}>
                                    <td><strong>{resultado.nome}</strong></td>
                                    <td><span className="">{resultado.quarentaJardas}</span></td>
                                    <td><span className="">{resultado.supino}</span></td>
                                    <td><span className="">{resultado.saltoHorizontal}</span></td>
                                    <td><span className="">{resultado.saltoVertical}</span></td>
                                    <td>
                                        {this.props.store.posicoesList.map((posicao)=>{         
                                            if(posicao.idAtleta === resultado.idAtleta){
                                                this.props.class(posicao.posicao, resultado)
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
                            ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}