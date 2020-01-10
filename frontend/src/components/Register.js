import React from 'react'


function RegisterPage() {
  return (
    <div className='register'>
      <p>Username</p>
       <textarea id="username" name="username" rows="1" cols="25"> </textarea>
      <p>Email</p>
       <textarea id="email" name="email" rows="1" cols="25"> </textarea>
      <p>Password</p>
       <textarea id="password" name="password" rows="1" cols="25"> </textarea>
       <br />
      <button className="register_btn" action='/register' method='POST'>Register</button>
      <button className="register_back_btn" action="/landing" method="POST">Back</button>
    </div>
  );
}

export default RegisterPage; 