import React from 'react'


function Footer() {
  return (
    <div className='footer'>
      <br />
      <button className="logout_btn" action="/logout" method="GET">Logout</button>
    </div>
  );
}

export default Footer; 