import React, { useState } from 'react'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = (event) => {
      event.preventDefault()
    // get user from email in form if password is correct login (user in session) or error incorrect password
    axios.post('/login', {email, password})
    console.log("test")
  
  };

  return (
    <div className="login">
      <form id="login-form" onSubmit={authenticate}>
      <p>Email</p>
      <input id="email_verify" name="email_verify" type="email" placeholder="example@email.com" value={email} onChange={event => setEmail(event.target.value)}/>
      <p>Password</p>
      <input id="password_verify" name="password_verify" type="password" placeholder="**********" value={password} onChange={event => setPassword(event.target.value)}/>
      <input type="submit" value="Submit"/>
      </form>
      <button className="login_back_btn">Back</button>
    </div>
  );
}

export default Login; 