import React, { Component } from 'react';

class Candidato extends Component{
    render(){
        return(
            <div class="box box-info container">
                <div class="box-header with-border">
                    <h3 class="box-title">Cadastro do candidato</h3>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <strong>Nome</strong>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Nome"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <strong>Email</strong>
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <strong>Idade</strong>
                                <div class="input-group">
                                    <input type="number" min="0" max="100" class="form-control" placeholder="Idade"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <strong>Peso</strong>
                                <div class="input-group">
                                    <input type="number" min="0" max="200" step="0.01" class="form-control" placeholder="Peso"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div class="form-group">
                                <strong>Altura</strong>
                                <div class="input-group">
                                    <input type="number" min="0" max="300" step="0.01" class="form-control" placeholder="Altura"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <strong>Posições</strong>
                                <select class="form-control select2" multiple="multiple" data-placeholder="Select a State"
                                        style={{width:"100%"}}>
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>California</option>
                                <option>Delaware</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Washington</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Candidato