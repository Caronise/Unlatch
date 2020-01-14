import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Image
} from 'react-bootstrap'

import { UserContext } from "../helpers/UserContext";


function Landing() {
  const user = useContext(UserContext);
  
  return (
    <>
    <div className='landing'> 
    <h1 className="wilkomen">Welcome to Unlatch</h1>
    <Image src="../images/home-page.png" alt='homePic' fluid/>
    <br/>
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