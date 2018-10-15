import React, { Component } from 'react';
import {Line, Bar, Radar} from 'react-chartjs';
import config from '../../config'

export default class GraficosTeam extends Component {
    constructor(props){
        super(props)
        this.state = {
            grafico : '0'
        }
        this.chartData = {
            labels:['40 Jardas', 'Supino', 'Vertical', 'Horizontal'],
            datasets:[]
        },
        this.chartOptions = config.config.chartOptions
        
    }
    
    buscarMediasCandidato(event, context){
        this.tipo.selectedIndex = 0
        this.setState({grafico: this.tipo.selectedIndex});
        this.props.buscarMediasCandidato(event, context)
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({grafico: this.tipo.selectedIndex});
        this.chartData.datasets = []
        this.props.store.medias.map((media)=>{
            this.props.store.posicoesList.map((pos, key)=>{
                if(media.posicao === pos.posicao){
                    var dado = []
                    dado.push(media.quarentaJardas)
                    dado.push(media.supino)
                    dado.push(media.saltoVertical)
                    dado.push(media.saltoHorizontal)
                    this.chartData.datasets.push({
                        label: media.posicao,
                        fillColor: config.config.colors[key],
                        strokeColor: config.config.colors[key],
                        pointColor: config.config.colors[key],
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: config.config.colors[key],
                        data : dado    
                    })
                }
            })                      
        });
        if(this.props.store.mediaAtleta[0]){
            var mediaAtleta = []
            mediaAtleta.push(this.props.store.mediaAtleta[0].quarentaJardas)
            mediaAtleta.push(this.props.store.mediaAtleta[0].supino)
            mediaAtleta.push(this.props.store.mediaAtleta[0].saltoVertical)
            mediaAtleta.push(this.props.store.mediaAtleta[0].saltoHorizontal)
            this.chartData.datasets.push({
                label: "Candidato",
                fillColor: "rgba(100,87,120,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data : mediaAtleta  
            })

        }
        
    }

    render(){
        return(
            <div className="box box-info container">
                    <div className="box-header with-border">
                        <h3 className="box-title">Resultados por gráficos <i className="fa fa-user-plus"></i></h3>
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
                                        <select className="form-control" id="idAtleta" name="idAtleta" ref={(input) => this.idAtleta = input} onChange={event=>this.buscarMediasCandidato(event, this)} >
                                            <option value="0" key="0" >Selecione ...</option>
                                            {this.props.store.atletas.map((atleta)=>(
                                                <option value={atleta.idAtleta} key={atleta.idAtleta} >{atleta.nome}</option>
                                            )
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="alert alert-info alert-dismissible fade show" role="alert">
                            <strong>Selecione !</strong> o estilo do gráfico que deseja.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>                    
                        <select className="form-control col-sm-3" id="grafico" name="grafico" onChange={event => this.onChange(event)} 
                                    ref={(input) => this.tipo = input} >
                            <option value="0" >Selecione ...</option>
                            <option value="1" >Coluna</option>
                            <option value="2" >Linear</option>
                            <option value="3" >Radar</option>
                        </select>
                        <hr/>
                        <div id="graficos">
                            {this.state.grafico === 1 &&<Bar data={this.chartData} options={this.chartOptions} redraw/>}
                            {this.state.grafico === 2 &&<Line data={this.chartData} options={this.chartOptions} redraw/>}
                            {this.state.grafico === 3 &&<Radar data={this.chartData} options={this.chartOptions} redraw/>}                            
                        </div>
                    </div>    
                </div>
        )
    }
}