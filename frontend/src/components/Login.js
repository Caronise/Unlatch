import React, { useState } from 'react'

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = () => {
    

  
  };

  return (
    <div className="login">
      <form id="login-form" action="/login" method="POST" onSubmit={authenticate}>
      <p>Email</p>
      <input id="email_verify" name="email_verify" type="email" placeholder="example@email.com" value={email} onChange={event => setEmail(event.target.value)}/>
      <p>Password</p>
      <input id="password_verify" name="password_verify" type="password" placeholder="**********" value={password} onChange={event => setPassword(event.target.value)}/>
      <button className="login_btn" action="/login" method="GET">Login</button>
      </form>
      <button className="login_back_btn" action="/landing" method="GET">Back</button>
    </div>
  );
}

export default Login; 