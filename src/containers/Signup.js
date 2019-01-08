import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import "./Signup.css";
import fire from '../config/Fire';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: "",
            newUser: null,
        };
    }

    validateForm(){
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
          );
        }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ isLoading: true });

       try {
           const newUser = await  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
           this.setState ({
               newUser
           });
           this.props.history.push("/");
       } catch (e) {
           alert(e.message);
       }

       this.setState ({ isLoading: false });
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Senha</ControlLabel>
                <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                </FormGroup>
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>Confirme senha</ControlLabel>
                    <FormControl
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.signup}
                    text="Cadastrar"
                    loadingText="Cadastrando, aguarde!"
                />
            </form>
        );
    }

  render() {
    return (
        <div className="Signup">
            {this.renderForm()}
        </div>
    );
  }
}
