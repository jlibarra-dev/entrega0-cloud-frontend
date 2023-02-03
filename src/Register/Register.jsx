import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css'
import './Register.css'

let backend_url = 'http://44.197.223.74:8080/'
let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let incorrectEmail = <p>Incorrect email format. Please change it</p>
let usedEmailText = <p>Email in use. Please change it</p>
let emptyFieldText = <p>Empty field, please change it</p>
let spinner = (<div className="spinner-border text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div>)

const Register = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [correctEmail, setCorrectEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [usedEmail, setUsedEmail] = useState(false);
    const [emptyField, setEmptyField] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (event) => {
        // 👇 Get input value from "event"
        setEmail(event.target.value);
        if (!event.target.value.match(validEmailRegex)) {
            setCorrectEmail(false)
        }
        else {
            setCorrectEmail(true)
        }
    };

    const handlePasswordChange = (event) => {
        // 👇 Get input value from "event"
        setPassword(event.target.value);
    };

    const handleUserNameChange = (event) => {
        // 👇 Get input value from "event"
        setUserName(event.target.value);
    };

    const registerEvent = () => {
        // 👇 Get input value from "event"
        // Hacer una petición para un usuario con ID especifico

        if (password.length != 0 && username.length != 0 && email.length != 0 && correctEmail) {
            setUsedEmail(false)
            setEmptyField(false)
            setLoading(true)
            fetch(`${backend_url}/register/${email}/${password}/${username}`)
                // Exito
                .then(response => response.json())  // convertir a json
                .then(json => {
                    if (json.message === 'Email in use') {
                        setUsedEmail(true)
                    }
                    else {
                        return navigate('/')
                    }
                })    //imprimir los datos en la consola
                .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
        }
        else {
            setEmptyField(true)
        }
        setTimeout(() => {
            setLoading(false)
          }, 2000);
        
    };
    return (
        <>
            <div className="App">
                <h1>Register into the Event Manager!</h1>
            </div>
            <div><div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" onChange={handleEmailChange} />
                {(correctEmail ? null : incorrectEmail)}
            </div>
                <div className="mb-3">
                    <label htmlFor="userPassword" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="userPassword" placeholder="Your Password" onChange={handlePasswordChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="userName" placeholder="Username" onChange={handleUserNameChange} />
                </div>
                {(loading?spinner:(<button type="button" className="btn btn-primary" onClick={registerEvent}>Register</button>))}
                {(usedEmail ? usedEmailText :null)}
                {(emptyField ? emptyFieldText: null)}
            </div>
        </>)
}

export default Register;