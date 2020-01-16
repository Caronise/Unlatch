import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


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
      <h3 className="repair_log_title">Add a repair log</h3>
      <Form>
        <Form.Group className="add_log_forms">
          <Form.Label className="add_label">Repair Description:</Form.Label>
          <Form.Control type="text" id="description" name="description" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)}/>
        </ Form.Group>
        <Form.Group className="add_log_forms">
          <Form.Label className="add_label">Mileage:</Form.Label>
          <Form.Control placeholder="Mileage" type="text" id="mileage" name="mileage" value={mileage} onChange={event => setMileage(event.target.value)}/>
        </ Form.Group>
        <Form.Group className="add_log_forms">
          <Form.Label className="add_label">Date of Repair:</Form.Label>
          <Form.Control placeholder="DD/MM/YY" type="text" id="timestamp" name="timestamp" value={timestamp} onChange={event => setTimestamp(event.target.value)}/>
        </ Form.Group>
        <Form.Group className="add_log_forms">
          <Form.Label className="add_label">Cost of repair: </Form.Label>
          <Form.Control placeholder="Cost of Repair" type="text" id="cost_of_repair" name="cost_of_repair" value={cost_of_repair} onChange={event => setCost_of_repair(event.target.value)}/>
        </ Form.Group>
        <Form.Group className="add_and_back">
          <Button variant="warning" className="add_repair_back_btn" onClick={() => history.push(`/projects/${currentProject.id}`)}>
            Back
          </Button>
          <Button variant="success" className="add_repair_btn" onClick={submitRepairLog}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddRepairLog; 