import React, { useContext } from 'react';
import {
  Button
} from 'react-bootstrap'

import { UserContext } from "../helpers/UserContext";


function Landing() {
  const user = useContext(UserContext);
  
  return (
    <div className='landing'> 
    <h1 className="wilkomen">Welcome to Unlatch!</h1>
    <img alt="background" src="https://images.unsplash.com/photo-1577801342676-7977a0e4d2fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3934&q=80"/>
    {!user && <>
      <Button variant="dark" href="/login" className="ref-login">Login</Button>
      <Button variant="dark" href="/register" className="ref-register">Register</Button>
      </>}
    </div>
  );
}

export default Landing;