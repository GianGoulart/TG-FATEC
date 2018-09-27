import React, { Component } from 'react';
import Select from 'react-select'


export default class FormResultados extends Component {
    render(){
        return(
            <div className="box box-info container">
                <div className="box-header with-border">
                    <h3 className="box-title">Resultados do Candidato</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <strong>Escolha o Candidato</strong>
                                <div className="input-group">
                                    <select class="form-control" id="select-form">
                                        <option value="0" key="0" >Selecione ...</option>
                                        {this.props.store.candidatos.map((candidato)=>(
                                            <option value={candidato.idAtleta} key={candidato.idAtleta} >{candidato.nome}</option>
                                        )
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">                        
                        <div className="form-group col-sm-4">
                            <strong>40 Jardas</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="100" step="0.01" className="form-control" placeholder="Tiro de 40 Jardas"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-4">
                            <strong>Impulsao</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="100" step="0.10" className="form-control" placeholder="Impulsão"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-4">
                            <strong>Força</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="100" step="0.10" className="form-control" placeholder="Força"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary float-right">Registrar</button>
                </div>
            </div>
        )
    }
}