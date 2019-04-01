import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import fire from './config/Fire';
import { withRouter } from "react-router-dom";

class App extends Component{

  constructor(props){
    super(props);
    this.state = ({
      user: {},
      isAuthenticated: false
    });
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout = async (e) => {
    e.preventDefault();

    try {
    await fire.auth().signOut();
    alert('Deslogado!');
    this.props.history.push("/login");
  } 
    catch(e) {
      alert(e.message);
      console.log(e);
    }

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    
    return (
        <div className="App container">
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="/">Notas online</a>
              </div>
              <div>
              {this.state.user ? 
                <ul class="nav navbar-nav navbar-right">
                <div className='botoes'>
                <button onClick={this.logout} class="btn btn-danger navbar-btn"> Deslogar</button>
                </div>
                </ul>
                : <ul class="nav navbar-nav navbar-right">
                  <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Cadastrar</a></li>
                  <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Logar</a></li>
                </ul>
                }</div>
            </div>
          </nav>
          <Routes />
        </div>
    );  
  }
}

export default withRouter(App);
