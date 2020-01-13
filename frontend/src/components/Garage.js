import React, { useContext } from 'react'
import { UserContext, VehiclesContext } from '../helpers/UserContext';

function Garage({ setCurrentVehicle }) {
  const user = useContext(UserContext);
  const vehicles = useContext(VehiclesContext);

  const handleSelection = (event) => {
    event.preventDefault();
    
    const chosenVehicle = vehicles.find((vehicle) => vehicle.id === Number(event.target.value));
    console.log(vehicles);
    console.log("Chosen vehicle: ", chosenVehicle);

    setCurrentVehicle(chosenVehicle);
  };

  

  return (
    <div className='select_vehicle'>
      <span>Welcome, <strong>{user && user.username}</strong></span>
      <label>Choose a vehicle:</label>

      <select name="vehicle_select" id="vehicle_select">
        <option value="">--Please select your vehicle--</option>
        {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id} onClick={handleSelection}>{vehicle.make_name}</option>)}
      </select>
    </div>
  )
}

export default Garage;
