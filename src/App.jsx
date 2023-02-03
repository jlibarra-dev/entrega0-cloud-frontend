import { useState, useId } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
import { ReactSession }  from 'react-client-session';
//import { SessionContext } from './Session.jsx';
//import { EventPage } from './EventsPage/EventPage';

let incorrectEmail = <p>Incorrect email format. Please change it</p>
let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let emptyFieldText = <p>Empty field, please change it</p>
let backend_url = 'http://44.197.223.74:8080/'
let spinner = (<div className="spinner-border text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div>)

function App() {
  let navigate = useNavigate();
  ReactSession.setStoreType("localStorage");
  console.log(ReactSession.get("id"))
  if(ReactSession.get("id")!=undefined){
    return navigate('/events')
  }
  else{
    'Logueado'
  }

  const [email, setEmail] = useState('');
  const [correctEmail, setCorrectEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  
  

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
          setLoading(true)
          if (json.message === 'Correct auth') {
            // <SessionContext.Provider value={json.id}>
            //   <EventPage />
            // </SessionContext.Provider>
            ReactSession.set("id", json.id);
            return navigate('/events')
          }
          else if (json.message === 'Incorrect password') {
            setShowError(true)
            setErrorMessage('Incorrect passwd')
          }
          else if (json.message === 'Incorrect email') {
            setShowError(true)
            setErrorMessage('Incorrect email')
          }
          else {
            setShowError(true)
            setErrorMessage('Error desconocido')
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
        <input type="email" className="form-control" id='userEmail' placeholder="name@example.com" onChange={handleEmailChange} />
        {(correctEmail ? null : incorrectEmail)}
      </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password:</label>
          <input type="password" className="form-control" id="userPassword" placeholder="Your Password" onChange={handlePasswordChange} />
        </div>
        {(loading?spinner:<button type="button" className="btn btn-primary" onClick={login}>Login</button>)}
        {(showError?<p>{errorMessage}</p>:null)}
        <br></br>
        {(emptyField ? emptyFieldText : null)}
        <Link to="/register">Not registered? What are you waiting?</Link></div>
    </>

  )
}

export default App
