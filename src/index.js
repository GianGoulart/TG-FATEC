import React from 'react';
import ReactDOM from 'react-dom';
//import './css/index.css';
import './css/base.css';
import './css/bootstrap.css';
import './scripts/admin';
import './scripts/demo';
import './scripts/javascript';
import './scripts/scripts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Login from './components/Login';
import {Router,browserHistory, Route} from 'react-router';
import Cadastro from './components/myteam/Cadastro';
import Home from './components/Home';
import TryOut from './components/tryOut/TryOut';
import MyTeam from './components/myteam/MyTeam';
import ViewTeamContainer from './components/myteam/ViewTeam';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { atletas, posicoes, reload, candidatos } from './reducers/functionsReductors';
import { Provider } from 'react-redux';
import CandidatoContainer from './components/tryOut/Candidato';
import ResultadosContainer from './components/tryOut/Resultados'

import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({ atletas, posicoes, candidatos, reload });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history = {browserHistory}>
                <Route exact path="/" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/home" component={Home} />
                <Route path="/tryOut" component={TryOut} />
                <Route path="tryOut/novoCandidato" component={CandidatoContainer} />  
                <Route path="tryOut/novaAvaliacao" component={ResultadosContainer} />  
                <Route path="/myTeam" component={MyTeam} />
                <Route path="/myTeam/myTeam" component={ViewTeamContainer} />
            </Router>
        </Provider >
    ), document.getElementById('root')
);
registerServiceWorker();
