import React, { useContext } from 'react';
import { UserContext, VehiclesContext } from '../helpers/UserContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  Form
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Garage({ setCurrentVehicle, setProjects }) {
  let history = useHistory();
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
        console.log("Data from projects call: ", res.data);
        setProjects(res.data);
        history.push('/garage/{chosenVehicle.vehicle_id}');
      })
  };

  return (
    <div className='select_vehicle'>
      <span id="welcome">Welcome, <strong>{user.username}</strong></span>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>My Vehicles:</Form.Label>
        <Form.Control onChange={handleSelection} as="select" className="vehicle_select">
          <option>--Please choose your vehicle--</option>
          {vehicles.map((vehicle) => 
          <option value={vehicle.vehicle_id}>{vehicle.make_name} {vehicle.model_name}</option>)
          }
        </Form.Control>
      </Form.Group>
    </div>
  )
} 

export default Garage;
