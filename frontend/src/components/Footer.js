import React from 'react'
import {
  Button
} from 'react-bootstrap'


function Footer() {
  return (
    <div className='footer'>
      <br />
      <Button variant="outline-danger" className="logout logout-btn" action="/logout" method="GET">Logout</Button>
    </div>
  );
}

export default Footer; 