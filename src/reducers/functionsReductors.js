export function home(state = [], action) {
    if (action.type === 'LISTAREVENTOS') { return action.eventos; }
    return state;
}

export function erro(state = [], action) {
    if (action.type === 'ERRO') { return action.erro; }
    return state;
}

export function loader(state = [], action) {
    if (action.type === 'LOADING') { return action.isLoading; }
    return state;
}

export function modal(state = '', action) {
    if (action.type === 'LISTAREVENTOSLOG') { return action.eventosLog }
    return state;
}

export function modalInfo(state = [], action) {
    if (action.type === 'MODALINFO') { return action.modalInfo; }
    return state;
}

export function status(state = [], action) {
    if (action.type === 'LISTARSTATUS') { return action.listaStatus; }
    return state;
}

export function tipoEvento(state = [], action) {
    if (action.type === 'LISTARTIPOEVENTO') { return action.tipoEventos; }
    return state;
}

export function usuario(state = [], action) {
    if (action.type === 'USUARIO') { return action.usuario; }
    return state;
}

export function login(state = [], action) {
    if (action.type === 'LOGIN/IN') { return action.login; }
    return state;
}

export function reload(state = [], action) {
    if (action.type === 'RELOAD') { return action.reload; }
    return state;
}
