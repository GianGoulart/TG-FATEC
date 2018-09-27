export function atletas(state = [], action) {
    if (action.type === 'ATLETAS') { return action.atletas;}
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

export function reload(state = [], action) {
    if (action.type === 'RELOAD') { return action.reload; }
    return state;
}
