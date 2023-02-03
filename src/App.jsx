import { useState, useId } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

let incorrectEmail = <p>Incorrect email format. Please change it</p>
let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let emptyFieldText = <p>Empty field, please change it</p>
let backend_url = 'http://127.0.0.1:5000/'
let spinner = (<div className="spinner-border text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div>)

function App() {
  const idEmail = useId();
  const [email, setEmail] = useState('');
  const [correctEmail, setCorrectEmail] = useState(true);
  const [password, setPassword] = useState('');
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

  const login = () => {
    if (password.length != 0 && email.length != 0 && correctEmail) {
      setEmptyField(false)
      fetch(`${backend_url}/login/${email}/${password}`)
        // Exito
        .then(response => response.json())  // convertir a json
        .then(json => {
          if (json.message === 'Correct auth') {
            console.log('Exito auth')
          }
          else if (json.message === 'Incorrect password') {
            console.log('Incorrect passwd')
          }
          else if (json.message === 'Incorrect email') {
            console.log('Incorrect email')
          }
          else {
            console.log('Error desconocido')
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
  }
  return (
    <>
      <div className="App">
        <h1>Welcome to the Event Manager!</h1>
      </div>
      <div><div className="mb-3">
        <label htmlFor="userEmail" className="form-label">Email address:</label>
        <input type="email" className="form-control" id={idEmail} placeholder="name@example.com" onChange={handleEmailChange} />
        {(correctEmail ? null : incorrectEmail)}
      </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password:</label>
          <input type="password" className="form-control" id="userPassword" placeholder="Your Password" onChange={handlePasswordChange} />
        </div>
        {(setLoading?<button type="button" className="btn btn-primary" onClick={login}>Login</button>:spinner)}
        {(emptyField ? emptyFieldText : null)}
        <Link to="/register">Not registered? What are you waiting?</Link></div>
    </>

  )
}

export default App
