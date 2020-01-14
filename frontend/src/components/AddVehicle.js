import React from 'react'
import {
  Form,
  Button
} from 'react-bootstrap'


function AddVehicle() {
  return (
    <div className="add_vehicle">
      <h3 className="head-label">Please enter the vehicle information</h3>
      <Form id="add_vehicle_form">
        <Form.Group controlId="makesForm.ControlSelect1">
          <Form.Label>Makes</Form.Label>
          <Form.Control id="makes" as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="modelsForm.ControlSelect2">
          <Form.Label>Models</Form.Label>
          <Form.Control id="models" as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlText1">
          <Form.Label>Year</Form.Label>
          <Form.Control id="years" className="year-input" type="text" rows="1" placeholder="Vehicle Year" style={{width: "90%", margin: "auto"}}/>
        </Form.Group>
        <Button className="add_vehicle_btn" action="/vehicle" method="POST">Add Vehicle</Button>
      </Form>
      <Button className="add_vehicle_back_btn" action="/garage" method="GET">Back</Button>
    </div>
  );
}

export default AddVehicle; 