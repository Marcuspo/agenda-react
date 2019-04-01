import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <div className='Home'>
                <div className='container'>
                    <div className='lander'>
                        <h1>Notas online</h1>
                        <p>Uma agenda de notas simples para pessoas simples.</p>
                    </div>
                </div>    
            </div>
        );
    }
}