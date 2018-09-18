import React, { Component } from 'react';
import Login from './components/Login';
import {Router,browserHistory, Route} from 'react-router';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TryOut from './components/TryOut';
import MyTeam from './components/MyTeam';
import VerTime from './components/myteam/verTime';


const muiTheme = getMuiTheme({
  appBar: {
      color: "#37517E",
      height: 50
  },
});

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  };
  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history = {browserHistory}>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/home" component={Home} />
            <Route path="tryOut/novo" component={TryOut} />
            <Route path="tryOut/historico" component={TryOut} />  
            <Route path="/myTeam" component={MyTeam} />
            <Route path="/myTeam/myTeam" component={VerTime} />
            <Route path="meuTime/meusAtletas" component={MyTeam} />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
