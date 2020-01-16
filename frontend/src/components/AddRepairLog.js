import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Form,
  Button
} from 'react-bootstrap';


function AddRepairLog({ currentProject }) {
  let history = useHistory();

  const [description, setDescription] = useState("");
  const [mileage, setMileage] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [cost_of_repair, setCost_of_repair] = useState("");


  const submitRepairLog = (event) => {
    event.preventDefault()

    axios.post(`/projects/${currentProject.id}/repair_logs`, { description, mileage, timestamp, cost_of_repair })
      .then((result) => {
        console.log(result.data);
        history.push(`/projects/${currentProject.id}`);
      })
      .catch(err => console.log(err))
  };


  return (
    <div className="add_repair_log">
      <h3>Add a repair log</h3>
      <Form>

        <Form.Group>
        <Form.Label>Repair Description:</Form.Label>
        <Form.Control type="text" id="description" name="description" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)}/>
        </ Form.Group><Form.Group>
        <Form.Label>Mileage:</Form.Label>
        <Form.Control type="text" id="mileage" name="mileage" value={mileage} onChange={event => setMileage(event.target.value)}/>
        </ Form.Group><Form.Group>
        <Form.Label>Timestamp:</Form.Label>
        <Form.Control type="text" id="timestamp" name="timestamp" value={timestamp} onChange={event => setTimestamp(event.target.value)}/>
        </ Form.Group><Form.Group>
        <Form.Label>Cost of repair: </Form.Label>
        <Form.Control type="text" id="cost_of_repair" name="cost_of_repair" value={cost_of_repair} onChange={event => setCost_of_repair(event.target.value)}/>
        </ Form.Group><Form.Group>
        <Button variant="warning" className="add_repair_back_btn" onClick={() => history.push(`/projects/${currentProject.id}`)}>
          Back
        </Button>
        <Button type="submit" variant="success" className="add_repair_btn" onClick={submitRepairLog}>
          Submit
        </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddRepairLog; 