import React, { useState, useContext } from 'react'
import axios from 'axios'
import {
  Form,
  Button
} from 'react-bootstrap'
import { UserContext } from "../helpers/UserContext";
import { Redirect } from 'react-router-dom';

function Login({ setUser }) {
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
        <Form id="login-form">
        <Form.Group>
          <Form.Label>Email address:</Form.Label>
          <Form.Control id='email' name='email' type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control id="password" name='password' type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
        </Form.Group>
          <Button className='login submit-btn' onClick={authenticate}>Login</Button>
        </Form>
        <Button className="login-back-btn">Back</Button>
      </div>
    );
  } else {
    return <Redirect to='/garage' />;
  }
}

export default Login; 