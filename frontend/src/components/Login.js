import React, { useState } from 'react'
// import authenticateUser from '../hooks/user'
import axios from 'axios'
import {
  Form,
  Button
} from 'react-bootstrap'


function Login({ setUser }) {
  const user = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = (event) => {
    event.preventDefault()

    axios.post('/login', { email, password })
      .then((result) => {
        // authenticateUser(email, password)
        console.log(result.data)
        setUser(result.data)
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="login">
      <Form id="login-form" onSubmit={authenticate}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control id='email' name='email' type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control id="password" name='password' type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
      </Form.Group>
        <Button className='login submit-btn'>Login</Button>
      </Form>
      <Button className="login-back-btn">Back</Button>
    </div>
  );
}

export default Login; 