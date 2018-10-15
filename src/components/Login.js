import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import  {loginWithGoogle,loginWithFace, loginWithEmailAndPassword} from '../config/auth'
import  {firebaseAuth}  from '../config/constants'
import LinearProgress from '@material-ui/core/LinearProgress';
import swal from 'sweetalert2'

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";
const toast = swal.mixin({
  toast: true,  
  showConfirmButton: false,
  timer: 5000,
  background: "#fff"
});
export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        splashScreen: false,
        email:"",
        pass:""
    };

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleFaceLogin = this.handleFaceLogin.bind(this);
    this.handleLoginDefault = this.handleLoginDefault.bind(this);
    
  }

  handleGoogleLogin() {
    
    loginWithGoogle()
        .catch(function (error) {
          console.log(error)
          toast({
            type: 'error',
            title: 'Erro ao logar !'
          })
          localStorage.removeItem(firebaseAuthKey);
        });
    localStorage.setItem(firebaseAuthKey, "1");

  }

  handleLoginDefault(ev){
    ev.preventDefault()
    var user = this.login.value.split("@")
    localStorage.setItem("username", user[0])
    loginWithEmailAndPassword(this.login.value,this.senha.value)
    .catch(error=>{
      console.log(error)
      toast({
        type: 'error',
        title: 'Erro ao logar !'
      })
      localStorage.removeItem(firebaseAuthKey);    
    })
    localStorage.setItem(firebaseAuthKey, "3");
  }

  handleFaceLogin(){
    loginWithFace()
      .catch(function(error){
        console.log(error)
        toast({
          type: 'error',
          title: 'Erro ao logar !'
        })
      })
    localStorage.setItem(firebaseAuthKey, "2");
    
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  componentWillMount() {
        if (localStorage.getItem(appTokenKey)) {
          browserHistory.push("/home");
            return;
        }

        firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                localStorage.setItem(appTokenKey, user.uid);
                localStorage.setItem("username", user.displayName);
                // store the token
                browserHistory.push("/home")
            }
        });
  }

  render() {
    if (localStorage.getItem(firebaseAuthKey)) return <SplashScreen />;
    return (
          <div className="hold-transition login-page">
            <div className="login-box">
              <div className="login-logo">
                <strong>Football Manager</strong>
              </div>
              <div className="login-box-body">              
                <form  method="post">
                  <div className="form-group has-feedback">
                      <div className="input-group mb-2">
                          <div className="input-group-prepend">
                              <div className="input-group-text bg-primary text-light"><i className="fas fa-user"></i></div>
                          </div>
                          <input type="text" className="form-control" id="login" name="login" autoComplete="off" tabIndex="1" autoFocus
                              placeholder="Login" ref={input => this.login = input} required maxLength="20" onChange={this.props.verificaErros} />
                      </div>
                  </div>
                  <div className="form-group has-feedback">
                    <div className="input-group mb-2">
                          <div className="input-group-prepend">
                              <div className="input-group-text bg-primary text-light"><i className="fas fa-key"></i></div>
                          </div>
                          <input type="password" className="form-control" id="senha" name="senha" autoComplete="new-password" tabIndex="2"
                              placeholder="Senha" ref={input => this.senha = input} required maxLength="20" onChange={this.props.verificaErros} />
                    </div>
                  </div>
                  <div className="row">                    
                    <div className="col-sm-12">
                      <button type="submit" onClick={ev=>this.handleLoginDefault(ev)} className="btn btn-primary float-right btn-block btn-flat">Entrar</button>
                    </div>
                  </div>
                </form>

                <div className="social-auth-links text-center">
                  <p>- OU -</p>
                  <button href="#" onClick={this.handleFaceLogin} className="btn btn-block btn-social  btn-facebook btn-flat"><i className="fab fa-facebook-f"></i> Entrar com o Facebook </button>
                  <button href="#" onClick={this.handleGoogleLogin} className="btn btn-block btn-social  btn-google  btn-flat"><i className="fab fa-google"></i> Entrar com o Google+</button>
                </div>
              </div>
            </div>
          </div>
      );

 
  }
}





const SplashScreen = () => (<LinearProgress />)


