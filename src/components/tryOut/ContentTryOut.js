import React, { Component } from 'react';

class ContentTryOut extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="mt-2 content-wrapper" id="page-content-wrapper">
                <div className="container row"/*{this.state.groupAcess === '"ADMINISTRADOR"' ? "container row" : "container "} style={{ marginLeft: "5%" }}*/>
                    <div className="col-sm-4 text-center mb-4">
                        <a href="/tryOut/novoCandidato">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Cadastrar novo candidato</h3>
                                <div className="box-body">
                                    <i className="fas fa-user-plus fa-5x"></i>
                                </div>
                                <div className="box-footer">
                                    <label>Cadastre um novo candidato</label>
                                </div>
                            </div>
                        </div>
                        </a>
                        <br />
                    </div>
                    <div className="col-sm-4 text-center mb-4">
                        <a href="/tryOut/novaAvaliacao">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Cadastrar uma nova avaliação</h3>
                                <div className="box-body">
                                    <i className="fas fa-chart-bar fa-5x"></i>
                                </div>
                                <div className="box-footer">
                                    <label>Cadastre as estatisticas dos candidatos avaliados</label>
                                </div>
                            </div>
                        </div>
                        </a>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
    
}
                    
export default ContentTryOut ;             
