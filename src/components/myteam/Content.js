import React, { Component } from 'react';

class Content extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="mt-2 content-wrapper" id="page-content-wrapper">
                <div className="container row"/*{this.state.groupAcess === '"ADMINISTRADOR"' ? "container row" : "container "} style={{ marginLeft: "5%" }}*/>
                    <div className= "col-sm-4 text-center  mb-4 "/*{this.state.groupAcess === '"ADMINISTRADOR"' ? "col-sm-4 text-center  mb-4" : "col-sm-12 text-center mb-4"}*/>
                        <a href="/myTeam/myTeam">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Ver meu time</h3>
                                <div className="box-body">
                                    <i className="far fa-list-alt fa-5x"></i>
                                </div>
                                <div className="box-footer">
                                    <label>Verifique, cadastre e analise os jogadores</label>
                                </div>
                            </div>
                        </div>
                        </a>
                        <br />
                    </div>
                    <div className="col-sm-4 text-center mb-4">
                        <a href="/tryOut/novo">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Cadastrar novo atleta</h3>
                                <div className="box-body">
                                    <i className="fas fa-user-plus fa-5x"></i>
                                </div>
                                <div className="box-footer">
                                    <label>Cadastre as estatisticas dos candidatos avaliados</label>
                                </div>
                            </div>
                        </div>
                        </a>
                        <br />
                    </div>
                    <div className="col-sm-4 text-center mb-4">
                        <a href="/tryOut/novo">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Dados da equipe</h3>
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
                    
export default Content ;             
