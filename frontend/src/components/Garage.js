import React, { useState } from 'react'


function Garage() {
  const [state, setState] = useState(0);

  return (
    <div className='welcome'>
      <span>Welcome, <strong>Username</strong></span>
      <button className='my-garage'>My Garage</button>
    </div>
  );
}

export default Garage; 