export function atletas(state = [], action) {
    if (action.type === 'ATLETAS') { 
        return action.atletas;}
    return state;
}

export function posicoes(state = [], action) {
    if (action.type === 'POSICOES') { return action.posicoes;}
    return state;
}

export function candidatos(state = [], action) {
    if (action.type === 'CANDIDATOS') {return action.candidatos;}
    return state;
}

export function resultados(state = [], action) {
    if (action.type === 'RESULTADOS') {return action.resultados;}
    return state;
}


export function posicoesList(state = [], action) {
    if (action.type === 'POSICOESATLETA') {
        return action.posicoesatletas; }
    return state;
}

export function medias(state = [], action) {
    if (action.type === 'MEDIAS') {
        return action.medias; }
    return state;
}

export function mediaAtleta(state = [], action) {
    if (action.type === 'MEDIAATLETA') {
        return action.mediaAtleta; }
    return state;
}

