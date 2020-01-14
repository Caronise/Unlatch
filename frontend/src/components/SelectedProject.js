import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  ListGroup
} from 'react-bootstrap';

function SelectedProject({ currentProject }) {
  const [parts, setParts] = useState({});
  const [instructions, setInstructions] = useState([]);
  const [video, setVideo] = useState({});
  const [repairLogs, setRepairLogs] = useState([]);

  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`http://localhost:8000/projects/${currentProject.id}/parts`, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(res => {
  //       setParts(res.data[0]);
  //     }),

  //     axios.get(`http://localhost:8000/projects/${currentProject.id}/instructions`, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       }
  //     }).then(res => {
  //       setInstructions(res.data);
  //     }),

  //     axios.get(`http://localhost:8000/projects/${currentProject.id}/videos`, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       }
  //     }).then(res => {
  //       setVideo(res.data[0]);
  //     }),

  //     axios.get(`http://localhost:8000/projects/${currentProject.id}/repair_logs`, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       }
  //     }).then(res => {
  //       setRepairLogs(res.data);
  //     })
  //   ])
  // }, []);


  return (
    <div className='selected_project'>
      <h2>Project Name: {currentProject} </h2>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Parts needed</th>
              <th>Price of Part(s)</th>
              <th>Serial Number</th>
              <th>Repair Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{parts.part_name}</td>
              <td>{parts.price}</td>
              <td>{parts.part_number}</td>
              <td>Level of Difficulty</td>
            </tr>
          </tbody>
        </Table>
        <h3>Instructions:</h3>
        <ListGroup defaultActiveKey={instructions}>
          {instructions.map(instruction =>
          <ListGroup.Item eventKey={instructions}>
             <p key={instruction.id}>Step {instruction.id}: {instruction.steps}</p>
          </ListGroup.Item>
             )} Instructions
        </ListGroup>
      <div className='project_instructions'>
      </div>
      <div className='project_video'>
        <h3>Video: {video.name} | {video.video_url} </h3>
      </div>
      <div className='project_repair_logs'>
        <ul>Repair Logs: {repairLogs.map(log =>  <li key={log.id}> {log.description} @ {log.mileage} | {log.cost_of_repair} on {log.timestamp} </li>)}</ul>
      </div>
    </div>
  );
}

export default SelectedProject; 