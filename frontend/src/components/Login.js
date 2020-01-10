import React from 'react'

function Login(props) {

  debugger;

  return (
    <div className="login">
      <p>Email</p>
      <textarea id="email_verify" name="email_verify" rows="1" cols="25"> </textarea>
      <p>Password</p>
      <textarea id="password_verify" name="password_verify" input type="password" rows="1" cols="25"> </textarea>
      <br />
      <button className="login_btn" action="/login" method="GET">Login</button>
      <button className="login_back_btn" action="/landing" method="GET">Back</button>
    </div>
  );
}

export default Login; 