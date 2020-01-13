import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from "../helpers/UserContext";


function Landing() {
  const user = useContext(UserContext);
  
  return (
    <>
    <div className='landing'> 
    <h1 className="wilkomen">Welcome to Unlatched</h1>
      {/* The line below allows the login and register to display if user isn't logged in */}
      {!user && <>
      <Link to="/login" className='ref-login'>Login</Link>
      <br/>
      <Link to="/register" className='ref-logout'>Register</Link>
      </>}
    </div>
    </>
  );
}

export default Landing; 