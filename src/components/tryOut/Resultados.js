import React, { Component } from 'react';

class Resultados extends Component{
    render(){
        return(
            <div class="box box-info container">
                <div class="box-header with-border">
                    <h3 class="box-title">Resultados do candidato</h3>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="row">
                        <div class="form-group col-sm-4">
                            <strong>40 Jardas</strong>
                            <div class="input-group">
                                <input type="number" min="0" max="100" step="0.01" class="form-control" placeholder="Tiro de 40 Jardas"/>
                            </div>
                        </div>
                        <div class="form-group col-sm-4">
                            <strong>Impulsao</strong>
                            <div class="input-group">
                                <input type="number" min="0" max="100" step="0.10" class="form-control" placeholder="Impulsão"/>
                            </div>
                        </div>
                        <div class="form-group col-sm-4">
                            <strong>Força</strong>
                            <div class="input-group">
                                <input type="number" min="0" max="100" step="0.10" class="form-control" placeholder="Força"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resultados