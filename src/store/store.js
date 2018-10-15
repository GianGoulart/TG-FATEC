import axios from 'axios';
import swal from 'sweetalert2'

var server = (process.env.SERVER === undefined || process.env.SERVER === null?'localhost:8000':process.env.SERVER)
const toast = swal.mixin({
    toast: true,  
    showConfirmButton: false,
    timer: 5000,
    background: "#000000"
});
  
  
export default class store {

    static buscarPosicoes(){
        return dispatch=>{
            swal({
                title: 'Carregando dados...'
            });
            swal.showLoading()
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
                swal.close()

            }); 
        }
    }

    static buscarPosicoesAtletas(id){
        return dispatch=>{
            swal({
                title: 'Carregando dados...'
            });            
            swal.showLoading()
            if (id == 0) {
                var url = `http://${server}/draft/dados-atletas/`
            }else{
                var url = `http://${server}/draft/dados-atletas/?atleta=`+id
            }
            axios.get(url)
            .then(response => {
                if(response.status === 200){                    
                    return response.data;                    
                }
            })
            .then((posicoesatletas)=>{
                dispatch({type:'POSICOESATLETA', posicoesatletas})
                swal.close()
            })
            
        }
    }

    static buscarAtletas(){
        return dispatch =>{
            swal({
                title: 'Carregando dados...'
            });
            swal.showLoading()
            axios.get(`http://${server}/draft/atletas/?tipo=1`)
            .then(response=>{
                if(response.data){
                    if(response.status === 200){
                        return response.data                        
                    }
                    else{ 
                        alert("não foi possível buscar os atletas");                        
                    } 
                }
                else{
                    alert('Nenhuma informação encontrada')
                }
            })
            .then(atletas => {               
                dispatch({type:"ATLETAS", atletas})
                swal.close()
            }) 
        }    
    }

    static buscarCandidatos(){
        return dispatch =>{
            swal({
                title: 'Carregando dados...'
            });
            swal.showLoading()
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
                swal.close()
            }) 
        }    
    }
    
    static buscarResultados(tipo){
        return dispatch =>{
            swal({
                title: 'Carregando dados...'
            });
            swal.showLoading()
            axios.get(`http://${server}/draft/resultados/?tipo=` + tipo)
            .then(response=>{
                if(response.data){
                    if(response.status === 200){
                        return response.data
                    }
                    else{ 
                        throw new Error("não foi possível buscar os as avaliações");                        
                    } 
                }
                else{
                    alert('Nenhuma informação encontrada')
                }
            })
            .then( resultados => {
                dispatch({type:"RESULTADOS", resultados  });       
                swal.close()
            }) 
        }    
    }

    static buscarMedias(){
        return dispatch =>{
            swal({
                title: 'Carregando dados...'
            });
            swal.showLoading()
            axios.get(`http://${server}/draft/medias/`)
            .then(response=>{
                if(response.data){
                    if(response.status === 200){
                        return response.data
                    }
                    else{ 
                        throw new Error("não foi possível buscar os as avaliações");                        
                    } 
                }
                else{
                    alert('Nenhuma informação encontrada')
                }
            })
            .then( medias => {
                dispatch({type:"MEDIAS", medias  }); 
                swal.close()
            }) 
        }    
    }

    static buscarMediasCandidato(dados){ 
        return dispatch =>{
            swal({
                title: 'Carregando dados...'
            });
            swal.showLoading()
            axios.get(`http://${server}/draft/skills/?atleta=`+dados.idAtleta.value)
            .then(response=>{
                if(response.data){
                    if(response.status === 200){
                        return response.data
                    }
                    else{ 
                        throw new Error("não foi possível buscar os as avaliações");                        
                    } 
                }
                else{
                    alert('Nenhuma informação encontrada')
                }
            })
            .then( mediaAtleta => {
                dados.props.buscarPosicoesAtletas(dados.idAtleta.value)
                dispatch({type:"MEDIAATLETA", mediaAtleta  });  
            })
        }    
    }

    static cadastrarCandidato(dados){
        return dispatch=>{
            swal.showLoading()
            axios({
                method:'post',
                url: `http://${server}/draft/atletas/`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    nome: dados.nome.value,
                    email: dados.email.value,
                    altura: dados.altura.value,
                    peso: dados.peso.value,
                    dataNascimento: dados.dataNascimento.value,
                    tipo: 2,

                }
            })
            .then(res=>{
                if(res.status == 201){
                    dados.props.cadastrarPosicoes(dados.posicoes, res.data.idAtleta);    
                }
            })
            .catch(function (error) {
            });   
        } 
    }   

    static cadastrarAtleta(dados){
        return dispatch=>{
            swal.showLoading()
            axios({
                method:'put',
                url: `http://${server}/draft/atletas/${dados.idAtleta.value}/`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    enderecoRua: dados.enderecoRua.value,
                    enderecoCep: dados.enderecoCep.value,
                    enderecoNum: dados.enderecoNum.value,
                    enderecoBairro: dados.enderecoBairro.value,
                    cidade: dados.cidade.value,
                    tipo:1
                }
            })
            .then(res=>{
                if(res.status == 200){
                    dados.props.cadastrarTelefones(dados);    
                    toast({
                        type: 'success',
                        title: 'Atleta cadastrado !'
                    })
                }

            })
            .catch(function (error) {
                toast({
                    type: 'error',
                    title: 'Erro ao cadastrar o Atleta !'
                })

            });   
        } 
    }   

    static cadastrarTelefones(dados){
        return dispatch =>{
            axios({
                method: 'post',
                url: `http://${server}/draft/telefones/`,
                headers: {
                    'Content-Type': 'application/json',
                },    
                data: {
                    idAtleta: dados.idAtleta.value,
                    celular: dados.celular.value,
                    telefone: (dados.telefone.value === undefined ?"":dados.telefone.value),
                    recados: (dados.recados.value === undefined ?"":dados.recados.value)                    
                }
            })
            .then(res=>{
            })
            .catch(function (error) {
            })
            swal.close()
        }    
    }

    static cadastrarPosicoes(posicoes, idAtleta){
        return dispatch =>{
            posicoes.map((posicao)=>{
                axios({
                    method: 'post',
                    url: `http://${server}/draft/atletas-posicoes/`,
                    headers: {
                        'Content-Type': 'application/json',
                    },    
                    data: {
                        idAtleta: idAtleta,
                        idPosicao: posicao.value
                    }
                })
                .then(res=>{
                    toast({
                        type: 'success',
                        title: 'Candidato cadastrado !'
                    })
        
                })
                .catch(function (error) {
                    toast({
                        type: 'error',
                        title: 'Erro ao cadastrar o candidato !'
                    })
        
                })
            })
        }    
    }


    static cadastrarAvaliacao(dados){
        return dispatch =>{
            swal.showLoading()
            axios({
                method: 'post',
                url: `http://${server}/draft/skills/`,
                data: {
                    quarentaJardas: dados.quarentaJardas.value,
                    supino: dados.supino.value,
                    saltoVertical: dados.saltoVertical.value,
                    saltoHorizontal:dados.saltoHorizontal.value,
                    idAtleta: dados.idAtleta.value                                  
                }
            })
            .then(res=>{
                console.log(res)
                if(res.status == 201)                    
                    toast({
                        type: 'success',
                        title: 'Avaliação cadastrada !'
                    })
                
            })
            .catch(function (error) {
                toast({
                    type: 'error',
                    title: 'Erro ao cadastrar !'
                })
            });    
        }
    }   

    
}