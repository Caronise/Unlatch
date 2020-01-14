import React, { useContext } from 'react';
import { UserContext, VehiclesContext } from '../helpers/UserContext';
import { 
  Dropdown 
} from 'react-bootstrap';

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
      <span id="welcome">Welcome, <strong>{user.username}</strong></span>
      <br/>
      <Dropdown name="vehicle-select" id="vehicle-select">
        <Dropdown.Toggle variant='warning' id='dropdown-basic'>
        --Please select your vehicle--
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {vehicles.map((vehicle) => <Dropdown.Item key={vehicle.id} value={vehicle.id} onClick={handleSelection}>{vehicle.make_name}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>  
    </div>
  )
}

export default Garage;
