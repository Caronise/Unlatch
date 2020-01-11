import React, { useContext } from 'react'
import { UserContext, VehiclesContext } from '../helpers/UserContext';

function Garage({ setCurrentVehicle }) {
  const user = useContext(UserContext);
  const vehicles = useContext(VehiclesContext);

  const handleSelection = (event) => {
    const chosenVehicle = vehicles.find((vehicle) => vehicle.id === Number(event.target.value));
    setCurrentVehicle(chosenVehicle);
  }

  return (
    <div className='welcome'>
      <span>Welcome, <strong>{user && user.username}</strong></span>
      <label for="vehicle_select">Choose a vehicle:</label>

      <select name="vehicle_select" id="vehicle_select">
        <option value="">--Please choose your vehicle--</option>
        {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id} onClick={handleSelection}>{vehicle.make_name}</option>)}
      </select>
    </div>
  )
}

export default Garage; 