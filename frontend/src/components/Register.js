import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import passwordValidator from 'password-validator';
import {
  Form,
  Button
} from 'react-bootstrap'


const passwordSchema = new passwordValidator();
  passwordSchema
  .is().min(8)                                    // Minimum length 8
  .is().max(100)                                  // Maximum length 100
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().digits()                                 // Must have digits
  .has().not().spaces()                           // Should not have spaces
  .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


  function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addAccount = (event) => {
    event.preventDefault()

    if (!validator.isEmail(email)) {
      console.log("Must be real email address")
    };
    if (!passwordSchema.validate(password)) {
      console.log("Password must be 8 characters, have upper and lowercase letters and must contain at least 1 number")
    }

    axios.post('/register', {username, email, password})
      .then((result) => {
        if (email === "database loop check") {
          console.log("Account already exists")
        };
        if (username === "database loop check") {
          console.log("Username already exists")
        };
        return result.data
      })
      .catch(err => console.log(err))
  };


  return (
    <div className='register'>
        <Form id="register-form" onSubmit={addAccount}>
        <Form.Group controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control id='username' name='username' placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control id='email' name='email' type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control id="password" name='password' type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
        </Form.Group>
          <Button className='register submit-btn'>Register</Button>
        </Form>
      <Button className="register-back-btn">Back</Button>
    </div>
  );
};

export default Register;