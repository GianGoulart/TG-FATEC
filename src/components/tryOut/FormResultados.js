import React, { Component } from 'react';
import Alert from 'react-s-alert';
export default class FormResultados extends Component {
    handleClick1(e) {
        e.preventDefault();
        Alert.warning("", {
            position: 'bottom',
            effect: 'scale',
            onShow: function () {
                console.log('aye!')
            },
            beep: false,
            timeout: 'none',
            offset: 100
        });
    }
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
                                    <select className="form-control" id="idAtleta" name="idAtleta" ref={(input) => this.idAtleta = input} >
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
                        <div className="form-group col-sm-3">
                            <strong>40 Jardas</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="100" step="0.01" className="form-control" id="quarentaJardas" name="quarentaJardas" ref={(input) => this.quarentaJardas = input} placeholder="Tiro de 40 Jardas"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-3">
                            <strong>Salto Horizontal</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="100" step="0.10" className="form-control" id="saltoHorizontal" name="saltoHorizontal" ref={(input) => this.saltoHorizontal = input}   placeholder="Em centímetros"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-3">
                            <strong>Salto Vertical</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="100" step="0.10" className="form-control" id="saltoVertical" name="saltoVertical" ref={(input) => this.saltoVertical = input} placeholder="Em centímetros"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-3">
                            <strong>Força</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="100" step="0.10" className="form-control" id="supino" name="supino" ref={(input) => this.supino = input} placeholder="Força"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="submit"  onClick={event=>this.props.cadastrarAvaliacao(this, event)}  className="btn btn-primary float-right">Registrar</button>
                </div>
            </div>
        )
    }
}