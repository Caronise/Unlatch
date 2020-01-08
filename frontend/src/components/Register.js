import React from 'react'


function RegisterPage () { 
  return(
       <div className='register'> 
       Username
       <textarea id="username" name="username" rows="1" cols="25"> </textarea>
       Email 
       <textarea id="email" name="email" rows="1" cols="25"> </textarea>
       Password 
       <textarea id="password" name="password" rows="1" cols="25"> </textarea>
       <button className="register" action='/register' method='POST'> Register </button>
       </div>
 );  
}

export default RegisterPage; 