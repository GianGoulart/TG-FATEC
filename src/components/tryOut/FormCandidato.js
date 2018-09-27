import React, { Component } from 'react';
import Select from 'react-select'


export default class FormCandidato extends Component {

    addPosicao(event){
        this.posicoes = event
        console.log(this.posicoes)
    }

    render(){
        return(
            <div className="box box-info container">
                <div className="box-header with-border">
                    <h3 className="box-title">Cadastro do candidato</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <strong>Nome</strong>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="nome" name="nome" ref={(input) => this.nome = input} placeholder="Nome"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <strong>Email</strong>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="email" name="email" ref={(input) => this.email = input} placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-group">
                                <strong>Data de Nascimento</strong>
                                <div className="input-group">
                                    <input type="date"  className="form-control" min="01/01/1900" max="31/12/2099" id="dataNasimento" name="dataNasimento" ref={(input) => this.dataNasimento = input} placeholder="dd/mm/yyyy"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <strong>Peso</strong>
                                <div className="input-group">
                                    <input type="number" min="0" max="200" step="0.01" className="form-control" id="peso" name="peso" ref={(input) => this.peso = input} placeholder="Peso"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <strong>Altura</strong>
                                <div className="input-group">
                                    <input type="number" min="0" max="300" step="0.01" className="form-control" id="altura" name="altura" ref={(input) => this.altura = input} placeholder="Altura"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <strong>Posições</strong>
                                <Select 
                                    onChange = {event =>(this.addPosicao(event))}
                                    placeholder = "Escolha as posições"
                                    isSearchable 
                                    isMulti                                                                  
                                    options={this.props.store.posicoes.map((posicao)=>(
                                        {value:posicao.idPosicao, label:posicao.descricao}
                                    ))} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="submit" onClick={event=>this.props.cadastrarCandidato(this, event)} className="btn btn-primary float-right">Cadastrar</button>
                </div>
            </div>
        )
    }
}