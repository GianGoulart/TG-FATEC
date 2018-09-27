import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import  {loginWithGoogle,loginWithFace, loginWithEmailAndPassword} from '../config/auth'
import  {firebaseAuth}  from '../config/constants'
import LinearProgress from '@material-ui/core/LinearProgress';


const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";


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
            alert(error); // or show toast
            localStorage.removeItem(firebaseAuthKey);
        });
    localStorage.setItem(firebaseAuthKey, "1");
  }

  handleLoginDefault(){
    loginWithEmailAndPassword(this.state.email,this.state.pass).then(res=>{
      browserHistory.push("/home")
    }).catch(error=>{
      console.log(error)
    })
  }

  handleFaceLogin(){
    loginWithFace()
      .catch(function(error){
        alert(error)
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
                console.log("User signed in: ", JSON.stringify(user));

                localStorage.removeItem(firebaseAuthKey);
                localStorage.setItem(appTokenKey, user.uid);

                // store the token
                browserHistory.push("/home")
            }
        });
  }

  render() {
    if (localStorage.getItem(firebaseAuthKey) === "1") return <SplashScreen />;
    return (
          <body className="hold-transition login-page">
            <div className="login-box">
              <div className="login-logo">
                <strong>Football Manager</strong>
              </div>
              <div className="login-box-body">              
                <form  method="post">
                  <div className="form-group has-feedback">
                    <input type="email" className="form-control " placeholder="Email" />
                    <span className="fas fa-user form-control-feedback"></span>
                  </div>
                  <div className="form-group has-feedback">
                    <input type="password" className="form-control" placeholder="senha" />
                    <span className="fas fa-key form-control-feedback"></span>
                  </div>
                  <div className="row">
                    
                    <div className="col-sm-12">
                      <button type="submit" onClick={this.handleLoginDefault} className="btn btn-primary float-right btn-block btn-flat">Entrar</button>
                    </div>
                  </div>
                </form>

                <div className="social-auth-links text-center">
                  <p>- OU -</p>
                  <button href="#" onClick={this.handleFaceLogin} className="btn btn-block btn-social  btn-facebook btn-flat"><i className="fab fa-facebook-f"></i> Entrar com o Facebook </button>
                  <button href="#" onClick={this.handleGoogleLogin} className="btn btn-block btn-social  btn-google  btn-flat"><i className="fab fa-google"></i> Entrar com o Google
                    Google+</button>
                </div>
                <a href="#" className="login-box-msg">Esqueci minha senha</a><br/>
                <a href="register.html" className="login-box-msg">Cadastrar-me</a>

              </div>
            </div>
          </body>
      );

 
  }
}





const SplashScreen = () => (<LinearProgress />)


