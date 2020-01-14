import React, { useState, useContext } from 'react'
import axios from 'axios'
import {
  Form,
  Button
} from 'react-bootstrap'
import { UserContext } from "../helpers/UserContext";
import { Redirect, useHistory } from 'react-router-dom';

function Login({ setUser }) {
  let history = useHistory();
  const user = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = (event) => {
    event.preventDefault()

    axios.post('/login', { email, password })
      .then((result) => {
        console.log(result.data)
        setUser(result.data)
      })
      .catch(err => console.log(err))
  };

  if (user === null) {
    return (
      <div className="login">
        <h2>Please Enter Your Credentials</h2>
        <Form id="login-form">
        <Form.Group>
          <Form.Label>Email address:</Form.Label>
          <Form.Control id='email' name='email' type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control id="password" name='password' type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
        </Form.Group>
        <Form.Group className="login-buttons">
          <Button variant="warning" className="login-back-btn" onClick={() => history.push('/')}>Back</Button>
          <Button variant="warning" className='login submit-btn' onClick={authenticate}>Login</Button>
          </Form.Group>
        </Form>
      </div>
    );
  } else {
    return <Redirect to='/garage' />;
  }
}

export default Login; 