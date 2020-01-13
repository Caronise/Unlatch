import React from 'react'


function AddVehicle() {
  return (
    <div className="add_vehicle">
      <h3>Please enter the vehicle information</h3>
      <form id="add_vehicle_form">
      <p>Make</p>
       <input id="make" name="make" rows="1" cols="25"/>
      <p>Model</p>
       <input id="model" name="model" rows="1" cols="25"/>
      <p>Year</p>
       <input id="year" name="year" rows="1" cols="25"/>
       <br />
      <button className="add_vehicle_btn" action="/vehicle" method="POST">Submit</button>
      </form>
      <button className="add_vehicle_back_btn" action="/garage" method="GET">Back</button>
    </div>
  );
}

export default AddVehicle; 