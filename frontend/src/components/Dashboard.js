import React from 'react'


function Dashboard() {
  return (
    <div className='dashboard'>
      <h5>Dashboard (Selected Car Info) </h5>
      <button className='dashboard_side_toggle'>Slide Toggle + Icon</button>
      <div className='selected_car'>
        <p>Picture of Users Car</p>
        <p>Make</p>
        <p>Model</p>
        <p>Year</p>
        <p>Information obtained from CarMD API</p>
      </div>
    </div>
  );
}

export default Dashboard; 