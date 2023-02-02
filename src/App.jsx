import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Welcome to the Event Manager!</h1>
      </div>
      <div><div className="mb-3">
        <label htmlFor="userEmail" className="form-label">Email address:</label>
        <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" />
      </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password:</label>
          <input type="password" className="form-control" id="userPassword" placeholder="Your Password" />
        </div>
        <Link to="/events"><button type="button" className="btn btn-primary">Login</button><br /></Link>
        <Link to="/register"><a href="">Not registered? What are you waiting?</a></Link></div>  
    </>

  )
}

export default App
