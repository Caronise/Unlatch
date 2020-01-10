import React from 'react'


function Header() {
  return (
    <div className='top-bar'>
      <img src="images/logo.png" width="250" height="75"></img>
      <div className='dropdown-wrapper'>
        <div className="dropdown-header">
          <button>Username's Garage</button>
        </div>
        <ul className="dropdown-list">
          <li className="dropdown-list-item">One</li>
          <li className="dropdown-list-item">Two</li>
          <li className="dropdown-add-list-item">Add Car</li>
        </ul>
      </div>
      <div className='sign-in'>
        <button>Sign up</button>
        <button>Login</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Header; 