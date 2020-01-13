import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { UserContext } from "../helpers/UserContext";


function Header() {
  const user = useContext(UserContext);


  return (
    <div className='top-bar'>
      <Link to="/"> <img className='logo'src="images/logo.png" alt="Logo" width="250" height="75"/> </Link>
      {user && <>
      <div className='username_header'>
          <button>{user.username}'s Garage</button>
      </div>
      </>}
    </div>
  );
}

export default Header;  