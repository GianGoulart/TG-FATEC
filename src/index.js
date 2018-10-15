import React from 'react';
import ReactDOM from 'react-dom';
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
import Home from './components/Home';
import TryOut from './components/tryOut/TryOut';
import MyTeam from './components/myteam/MyTeam';
import ViewTeamContainer from './components/myteam/ViewTeam';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { atletas, posicoes,  candidatos, resultados, posicoesList, medias, mediaAtleta } from './reducers/functionsReductors';
import { Provider } from 'react-redux';
import CandidatoContainer from './components/tryOut/Candidato';
import ResultadosContainer from './components/tryOut/Resultados'
import ViewResultadosContainer from './components/tryOut/ViewResultados';
import registerServiceWorker from './registerServiceWorker';
import AddTeamContainer from './components/myteam/AddTeam';
import ViewGraficosContainer from './components/tryOut/ViewGraficos';
import ViewGraficosTeamContainer from './components/myteam/ViewGraficosTeam';


const reducers = combineReducers({atletas, posicoes, candidatos,  resultados, posicoesList, medias, mediaAtleta });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history = {browserHistory}>
                <Route exact path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/tryOut" component={TryOut} />
                <Route path="tryOut/novoCandidato" component={CandidatoContainer} />  
                <Route path="tryOut/novaAvaliacao" component={ResultadosContainer} />  
                <Route path="tryOut/resultados" component={ViewResultadosContainer} />  
                <Route path="tryOut/graficos" component={ViewGraficosContainer} />
                <Route path="/myTeam" component={MyTeam} />
                <Route path="/myTeam/myTeam" component={ViewTeamContainer} />
                <Route path="/myTeam/addAtleta" component={AddTeamContainer} />
                <Route path="/myTeam/graficos" component={ViewGraficosTeamContainer} />                
            </Router>
        </Provider >
    ), document.getElementById('root')
);
registerServiceWorker();
