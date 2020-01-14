import React, { useContext } from 'react';
import { UserContext, VehiclesContext } from '../helpers/UserContext';
import axios from 'axios';
import {
  Dropdown
} from 'react-bootstrap';

function Garage({ setCurrentVehicle, setProjects }) {
  const user = useContext(UserContext);
  const vehicles = useContext(VehiclesContext);

  const handleSelection = (event) => {
    event.preventDefault();

    const chosenVehicle = vehicles.find((vehicle) => vehicle.vehicle_id === Number(event.target.value));
    console.log("Chosen vehicle: ", chosenVehicle);
    console.log("EVENT VALUE: ", event.target.value);
    
    setCurrentVehicle(chosenVehicle);

    axios.get(`/vehicles/${chosenVehicle.vehicle_id}/projects`)
      .then(res => {
        console.log("Data from projects call: ", res.data)
        setProjects(res.data)
      })
  };

  return (
    <div className='select_vehicle'>
      <span id="welcome">Welcome, <strong>{user.username}</strong></span>
      <br />


      <label>Choose a vehicle:</label>
      <select name="vehicle_select" id="vehicle_select">
        <option value="">--Please choose your vehicle--</option>
        {vehicles.map((vehicle) => <option value={vehicle.vehicle_id} onClick={handleSelection}>{vehicle.make_name} {vehicle.model_name}</option>)}
      </select>

    </div>
  )
}

export default Garage;
