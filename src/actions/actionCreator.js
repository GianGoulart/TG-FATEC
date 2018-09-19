export function buscarAtletas(atletas){
    return {type:'ATLETAS',atletas};
}
export function buscarPosicoes(posicoes){
    return {type:'POSICOES',posicoes};
}
export function loading(loading){
    console.log(loading)
    return {type:'LOADING',loading};
}


