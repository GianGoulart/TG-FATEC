import React, { Component } from 'react';
import InputMask from 'react-input-mask';
export default class FormAddTeam extends Component {
    render(){
        return(
            <div className="box box-info container">
                <div className="box-header with-border">
                    <h3 className="box-title">Adicionar ao Time <i className="fa fa-user-plus"></i></h3>
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
                    <hr/>
                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                        <strong>Complete os dados!</strong> para adicionar o candidato ao time.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    <div className="row">                        
                        <div className="form-group col-sm-6">
                            <strong>Rua</strong>
                            <div className="input-group">
                                <input type="text" className="form-control" id="enderecoRua" name="enderecoRua" ref={(input) => this.enderecoRua = input} placeholder="Informe a Rua"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-2">
                            <strong>Numero</strong>
                            <div className="input-group">
                                <input type="number" min="0" max="10000" step="1" className="form-control" id="enderecoNum" name="enderecoNum" ref={(input) => this.enderecoNum = input} placeholder="nº da casa"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-3">
                            <strong>Bairro</strong>
                            <div className="input-group">
                                <input type="text" className="form-control" id="enderecoBairro" name="enderecoBairro" ref={(input) => this.enderecoBairro = input} placeholder="bairro"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-3">
                            <strong>Cep</strong>
                            <div className="input-group">
                            <InputMask type="text" mask="99999-999" className="form-control" id="enderecoCep" name="enderecoCep" ref={(input) => this.enderecoCep = input}   placeholder="Informe o Cep"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-4">
                            <strong>Cidade</strong>
                            <div className="input-group">
                                <input type="text" className="form-control" id="cidade" name="cidade" ref={(input) => this.cidade = input} placeholder="Informe a cidade"/>
                            </div>
                        </div>

                        <div className="form-group col-sm-3">
                            <strong>Celular</strong>
                            <div className="input-group">
                                <InputMask type="text" mask="(99) 99999-9999" className="form-control" id="celular" name="celular" ref={(input) => this.celular = input} placeholder="celular"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-3">
                            <strong>Telefone</strong>
                            <div className="input-group">
                                <InputMask type="text" mask="9999-9999" className="form-control" id="telefone" name="telefone" ref={(input) => this.telefone = input} placeholder="telefone"/>
                            </div>
                        </div>
                        <div className="form-group col-sm-3">
                            <strong>Recados</strong>
                            <div className="input-group">
                                <InputMask type="text" mask="9999-9999"className="form-control" id="recados" name="recados" ref={(input) => this.recados = input} placeholder="recados"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="submit"  onClick={event=>this.props.cadastrarAtleta(this, event)}  className="btn btn-primary float-right">Registrar</button>
                </div>
            </div>
        )
    }
}