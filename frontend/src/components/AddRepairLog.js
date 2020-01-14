import React from 'react'


function AddRepairLog() {
  return (
    <div className="add_repair_log">
      <h3>Add a repair log</h3>
      <p>description: </p>
        <textarea id="description" name="description" rows="1" cols="25"> </textarea>
      <p>Mileage: </p>
        <textarea id="mileage" name="mileage" rows="1" cols="25"> </textarea>
      <p>timestamp: </p>
        <textarea id="timestamp" name="timestamp" rows="1" cols="25"> </textarea>
      <p>Cost of repair: </p>
        <textarea id="cost_of_repair" name="cost_of_repair" rows="1" cols="25"> </textarea>
        <br />
        <button className="add_repair_btn" action="/projects/:project_id/repair_logs" method="POST">Submit</button>
        <button className="add_repair_back_btn" action="/garage" method="GET">Back</button>
    </div>
  );
}

export default AddRepairLog; 