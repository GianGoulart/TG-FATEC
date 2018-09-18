import {buscaFiliais, buscaPagamentos, apEntregue, autenticar, enviarIntegracao, consultarIntegracao,buscaParametros,salvarParametros, statusPagamentos, loading} from "../actions/actionCreator"
import axios from 'axios';
import { browserHistory } from 'react-router';

var server = (process.env.SERVER === undefined || process.env.SERVER === null?'localhost:8005':process.env.SERVER)

export default class store {
    static autenticar(state){
        return dispatch =>{
            state.loading = true
            dispatch(loading(state.loading))
            axios({
                method: 'post',
                url: `http://${server}/login`,
                data: {
                    login: state.user,
                    senha: state.senha
                }
            })
            .then(function (response) {
                if(response.data.meta.errorCode)
                    alert('Usuário ou senha inválido');
                else{
                    return response.data.records[0]
                }
            }).then(usuario=>{
                if(usuario === "" || usuario === undefined ){
                    browserHistory.push("/")    
                    usuario = ""
                }else{
                    var name = usuario.name.split(" ")
                    sessionStorage.setItem('currentUser', JSON.stringify(usuario.login));
                    sessionStorage.setItem('nameUser', name[0]); 
                    sessionStorage.setItem('groupUser', JSON.stringify(usuario.systemAccessGroup)); 
                    browserHistory.push("/Home")
                }
                state.loading = false
                dispatch(autenticar(usuario))
                dispatch(loading(state.loading))

            })
        }    
    }


    static buscaFiliais(){
        return dispatch=>{
            axios.get(`http://${server}/filiais`)
            .then(response => {
                if(response.status === 200){
                    return response.data.records;
                } else {
                    throw new Error("não foi possível buscar as filiais");
                }
            })
            .then(filiais => {
                dispatch(buscaFiliais(filiais));  
          }); 
        }
    }

    static buscaPagamentos(state){
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
                url: `http://${server}/buscapagamentos`,
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
                console.log("store", response)

                if(response.data){
                    if(response.status === 200){

                        response.data.map((res)=>{
                            switch (res.idtipocontribuicao){
                                case "1":
                                    return res.idtipocontribuicao = "CONFEDERATIVA";
                                    
                                case "2":
                                    return  res.idtipocontribuicao = "ASSISTENCIAL";
                                    
                                case "3":
                                    return res.idtipocontribuicao = "MENSALIDADE";
                                    
                                case "4":
                                    return res.idtipocontribuicao = "SINDICAL";
                                    
                                default:
                                    return ""
                            
                            } 
                        })
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
                if(pagamentos === undefined)
                    pagamentos = []
                dispatch(buscaPagamentos(pagamentos))            
                state.loading = false
                dispatch(loading(state.loading))
    
            }) 
        }    
    }
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
    }

    static enviarIntegracao(pagamento,state){
        return dispatch =>{
            pagamento.idtipocontribuicao = pagamento.idtipocontribuicao.split("-")[0].toString()
            axios({
            method: 'post',
            url: `http://${server}/pagamentos`,
            data: pagamento
            })
            .then(function (response) {
                if(response.status === 200)
                    alert('Status Atualizado');

                    return response.data
                })
            .then(res=>{

                dispatch(enviarIntegracao(res))
                dispatch(this.buscaPagamentos(state))

            })
        }
    }

    static apEntregue(pagamento,state){
        return dispatch => {
            pagamento.entregue = parseInt(pagamento.entregue,10)
        
            axios({
            method: 'post',
            url: `http://${server}/apEntregue`,
            data: pagamento
            })
            .then(function (response) {
                if(response.data.errorCode === "0")
                    return response;      
            })
            .then(entregue =>{
                dispatch(apEntregue(entregue))
                dispatch(this.buscaPagamentos(state))
            })
        }
    }

    static consultarIntegracao(pagamento,state){
        return dispatch=>{
            axios.get(`http://${server}/pagamentos/${pagamento.mensagem}`)
            .then(function (response) {               
                if(response.data.status === 200)
                    console.log("store" ,response.data)
                    alert('Status Atualizado');
                    return response.data                   
            })
            .then(res=>{
                dispatch(consultarIntegracao(res))
                dispatch(this.buscaPagamentos(state))

                
            })
        }
    }

    static buscaParametros(tipocontribuicao){
        return dispatch =>{        
            var url = `http://${server}/parametros?contribuicao='${tipocontribuicao}'`
                axios.get(url)
                .then(response=>{
                    if(response.data){
                        if(response.status === 200){
                           return JSON.parse(response.data)
                        }
                    }else{
                        alert('Nenhuma informação encontrada')                     
                    }
                }).then(parametros=>{
                    if(parametros === undefined)
                        parametros = {}
                    dispatch(buscaParametros(parametros))
                })
            
            }
    }

    static salvarParametros(state){    
        return dispatch=>{  
            var dados = {}
            dados.campos = {
                        "tipoNF": state.tipoNF,
                        "observacao":state.observacao,
                        "contaContabil":state.contaContabil,
                        "descricaoContabil":state.descricaoContabil,
                        "condicaoPagamento":state.condicaoPagamento,
                        "itemNota":state.itemNota,
                        "numeroNF":state.numeroNF
                    };
            dados.user = state.user        
            var url = `http://${server}/parametros/${state.tipocontribuicao}`
            axios({
                method: 'post',
                url: url,
                data: dados
            })
            .then((response)=> {
                if(response.status === 200)
                alert('Status Atualizado');
                return response.data
            }).then(res=>{
                dispatch(salvarParametros(res))
                dispatch(this.buscaParametros(state.tipocontribuicao))
            })
        }
    }
}