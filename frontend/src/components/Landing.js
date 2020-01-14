import React from 'react';
import { Link } from 'react-router-dom';
import {
  Image
} from 'react-bootstrap'

// Once the state is passed to this component, then it should be able to set the state when the user submits
// I'm only tracking the username and not the password right?

function Landing() {
  
  return (
    <>
    <div className='landing'> 
    <h1 className="wilkomen">Welcome to Unlatched</h1>
    <Image src="../images/home-page.png" alt='homePic' fluid/>
    <br/>
    <Link to="/login" className='ref-login'>Login</Link>
    <br/>
    <Link to="/register" className='ref-logout'>Register</Link>
    </div>
    </>
  );
}

export default Landing; 