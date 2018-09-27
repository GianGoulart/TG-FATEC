import axios from 'axios';

var server = (process.env.SERVER === undefined || process.env.SERVER === null?'localhost:8000':process.env.SERVER)

export default class store {

    static buscarPosicoes(){
        return dispatch=>{
            axios.get(`http://${server}/draft/posicoes/`)
            .then(response => {
                if(response.status === 200){
                    return response.data;
                } else {
                    throw new Error("não foi possível buscar as filiais");
                }
            })
            .then(posicoes => {
                dispatch({type:"POSICOES",posicoes});  
          }); 
        }
    }

    static buscarAtletas(){
        return dispatch =>{
            axios.get(`http://${server}/draft/dados-atletas/`)
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
                dispatch({type:"ATLETAS", atletas  });            
            }) 
        }    
    }

    static buscarCandidatos(){
        return dispatch =>{
            axios.get(`http://${server}/draft/atletas/?tipo=2`)
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
            .then( candidatos => {
                dispatch({type:"CANDIDATOS", candidatos  });            
            }) 
        }    
    }
    
    static cadastrarCandidato(dados){
        console.log(dados)
        axios({
            method:'post',
            url: `http://${server}/draft/atletas`,
            data: {
                nome: dados.name,
                email: dados.email,
                altura: dados.altura,
                peso: dados.peso,
                dataNascimento: dados.dataNascimento,
            }
        })
        .then(res=>{
            console.log(res)
            if(res.ok){
                this.store.cadastrarPosicoes(dados.posicoes, res.body.idAtleta);    
            }
        })
        .catch(function (error) {
            console.log(error);
        });    
    }   


    static cadastrarAvaliacao(e){
        e.preventDefault()
        axios({
            method: 'put',
            url: `http://${server}/draft/atletas/`+this.idAtleta,
            data: {
                
            }
        })
        .then(res=>{
            alert("Dados cadastrados")
        })
        .catch(function (error) {
            console.log(error);
        });    
    }   

    static cadastrarPosicoes(posicoes, idAtleta){
        posicoes.map((posicao)=>(
            axios({
                method: 'post',
                url: `http://${server}/draft/atletas-posicoes`,
                data: {
                    idAtleta: idAtleta,
                    idPosicao: posicao.value
                }
            })
            .then(res=>{
                alert("Dados cadastrados")
            })
            .catch(function (error) {
                console.log(error);
            })
        ))
            
    }
}