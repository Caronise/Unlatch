import React, { useState } from 'react'


function RegisterPage() {

const [user, setUser] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <div className='register'>
      <p>Username</p>
       <input id="username" name="username" rows="1" cols="25" value={user} onChange={event => setUser(event.target.value)}/>
      <p>Email</p>
       <input id="email" name="email" rows="1" cols="25" value={email} onChange={event => setEmail(event.target.value)}/>
      <p>Password</p>
       <input id="password" name="password" rows="1" cols="25" value={password} onChange={event => setPassword(event.target.value)}/>
       <br />
      <button className="register_btn" action='/register' method='POST'>Register</button>
      <button className="register_back_btn" action="/landing" method="POST">Back</button>
    </div>
  );
}

export default RegisterPage; 