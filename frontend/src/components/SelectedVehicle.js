import React from 'react'


function SelectedVehicle({ currentVehicle }) {
  return (
    <div className='selected_vehicle'>
      <h5>You're currently working on: {currentVehicle.make_name}</h5>
      <div className='selected_car'>
        <p>Picture: {currentVehicle.picture_url}</p>
        <p>Make: {currentVehicle.make_id}</p>
        <p>Model: {currentVehicle.model_id}</p>
        <p>Year: {currentVehicle.year}</p>
        
        <p>Information obtained from CarMD API</p>
      </div>  
    </div>
  );
}

export default SelectedVehicle; 