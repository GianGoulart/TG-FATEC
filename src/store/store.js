import {buscarAtletas, buscarPosicoes} from "../actions/actionCreator"
import axios from 'axios';
import { browserHistory } from 'react-router';


var server = (process.env.SERVER === undefined || process.env.SERVER === null?'localhost:8000':process.env.SERVER)

export default class store {

    static buscaPosicoes(){
        return dispatch=>{
            axios.get(`http://${server}/draft/posicoes/`)
            .then(response => {
                if(response.status === 200){
                    return response.data.records;
                } else {
                    throw new Error("não foi possível buscar as filiais");
                }
            })
            .then(posicoes => {
                dispatch(buscarPosicoes(posicoes));  
          }); 
        }
    }

    static buscarAtletas(){
        return dispatch =>{
            axios.get(`http://${server}/draft/atletas/`)
            .then(response=>{
                if(response.data){
                    if(response.status === 200){
                        return response.data
                    }
                    else{ 
                        throw new Error("não foi possível buscar os pagamentos");                        
                    } 
                }
                else{
                    alert('Nenhuma informação encontrada')
                }
            })
            .then( atletas => {
                console.log(atletas);
                dispatch(buscarAtletas(atletas));            
            }) 
        }    
    }
/*
    static statusPagamentos(state){
        var mesbase, anobase = ""
        return dispatch =>{
            state.loading = true
            dispatch(loading(state.loading))
            if(state.mesanobase !== ""){
                var mesanobase = state.mesanobase.split('-')
                mesbase = mesanobase[1]
                anobase = mesanobase[0]
            }
            axios({
                method: 'post',
                url: `http://${server}/conciliacao`,
                data: {
                    filial: state.filial,
                    contribuicao: state.tipocontribuicao,
                    mes: mesbase,
                    ano: anobase,
                    sindicato: state.sindicato,
                    metodo: state.metodo,
                    entregue: state.entregue,
                    numeroap: state.numnf,
                    status: state.status,
                    pagamento: state.pagamento
                }
            })
            .then(response=>{
                if(response.data){
                    if(response.status === 200){
                        return response.data
                    }
                    else{ 
                        throw new Error("não foi possível buscar os pagamentos");                        
                    } 
                }
                else{
                    alert('Nenhuma informação encontrada')
                }
            })
            .then( pagamentos => {
                var gerados = []
                if(pagamentos === undefined)
                    pagamentos = []
                if(pagamentos.integradas !== undefined && pagamentos.integradas !== null ){
                    for(var i = 0 ; i < pagamentos.integradas.length; i++){
                        gerados.push(pagamentos.integradas[i])
                    }
                }
                if(pagamentos.pendentes !== undefined && pagamentos.pendentes !== null ){
                    for(i = 0 ; i < pagamentos.pendentes.length; i++){
                        gerados.push(pagamentos.pendentes[i])
                    }
                }
                pagamentos.gerados = gerados
                dispatch(statusPagamentos(pagamentos))
                state.loading = false

                dispatch(loading( state.loading))

            }) 
        }    
    } */
}