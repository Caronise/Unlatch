import React from 'react'


function Dashboard () { 
  return( <div className='dashboard'>
  <h5>Dashboard</h5>
  <button className='side-toggle'>Slide Toggle + Icon</button>
  <div className='user-car'>
    <p>Picture of Users Car</p>
    <form className='make-model-year'>
      <input className='car-make' type='text' placeholder='Make'/><br/>
      <input className='car-model' type='text' placeholder='Model'/><br/>
      <input className='car-year' type='text' placeholder='Year'/><br/>
      <input className='search-car' type='submit'/>
    </form>
  </div>
  </div>

);  
}

export default Dashboard; 