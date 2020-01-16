import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


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
      <p>Repair Description: </p>
      <textarea id="description" name="description" rows="1" cols="25" value={description} onChange={event => setDescription(event.target.value)}> </textarea>
      <p>Mileage: </p>
      <textarea id="mileage" name="mileage" rows="1" cols="25" value={mileage} onChange={event => setMileage(event.target.value)}> </textarea>
      <p>Timestamp: </p>
      <textarea id="timestamp" name="timestamp" rows="1" cols="25" value={timestamp} onChange={event => setTimestamp(event.target.value)}> </textarea>
      <p>Cost of repair: </p>
      <textarea id="cost_of_repair" name="cost_of_repair" rows="1" cols="25" value={cost_of_repair} onChange={event => setCost_of_repair(event.target.value)}> </textarea>
      <br />
      <button className="add_repair_back_btn" onClick={() => history.push(`/projects/${currentProject.id}`)}>Back</button>
      <button className="add_repair_btn" onClick={submitRepairLog}>Submit</button>
    </div>
  );
}

export default AddRepairLog; 