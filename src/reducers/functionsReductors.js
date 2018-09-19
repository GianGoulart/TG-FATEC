export function atletas(state = [], action) {
    switch (action.type){
        case 'ATLETAS':
            console.log(action.atletas)
            return action.atletas
        default:
            return state;
    }    
}

export function posicoes(state = [], action) {
    switch (action.type){
        case 'POSICOES':
            return action.posicoes
        default:
            return state;
    }    
}
