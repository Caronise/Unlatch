import React from 'react'


function SelectedVehicle({ currentVehicle }) {
  return (
    <div className='selected_vehicle'>
      <h5>SelectedVehicle (Selected Car Info)</h5>
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

export default SelectedVehicle; 