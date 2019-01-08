import React, { Component } from 'react';
import fire from '../config/Fire';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import LoaderButton from './LoaderButton';

class Login extends Component {

    constructor(props){
        super(props)

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
        }
        this.state = {
            isLoading : false,
            email: '',
            password: '',
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = async (e) => {
        e.preventDefault();

        this.setState({ isLoading: true });

        try {
        await fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        alert("Logado!");
        this.props.history.push("/");
    }
        catch(e) {
            alert(e.message);
            console.log(e);
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();


        this.setState({ isLoading: false })
    }

render() {
    return (
        <div className='login'>
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId='email' bsize='large'>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        name='email'
                    />
                </FormGroup>
                <FormGroup controlId='password'>
                    <ControlLabel>Senha</ControlLabel>
                    <FormControl 
                        value={this.state.password}
                        onChange={this.handleChange}
                        type='password'
                        name='password'
                    />
                </FormGroup>
                    <LoaderButton 
                    block
                    class="btn btn-primary"
                    type='Submit'
                    onClick={this.login}
                    text="Login"
                    isLoading={this.state.isLoading}
                    loadingText="Logando, aguarde!"
                    />    
            </form>
        </div>
    );
}
}

export default Login;