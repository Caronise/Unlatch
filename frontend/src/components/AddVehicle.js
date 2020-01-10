import React from 'react'


function AddVehicle() {
  return (
    <div className="add_vehicle">
      <h3>Please enter the vehicle information</h3>
      <p>Make</p>
       <textarea id="make" name="make" rows="1" cols="25"> </textarea>
      <p>Model</p>
       <textarea id="model" name="model" rows="1" cols="25"> </textarea>
      <p>Year</p>
       <textarea id="year" name="year" rows="1" cols="25"> </textarea>
       <br />
      <button className="add_vehicle_btn" action="/vehicle" method="POST">Submit</button>
      <button className="add_vehicle_back_btn" action="/garage" method="GET">Back</button>
    </div>
  );
}

export default AddVehicle; 