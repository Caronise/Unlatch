import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
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
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action className='project_parts' href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item className='project_instructions' action href="#link2" disabled>
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action className='project_video'>
          This one is a button
        </ListGroup.Item>
        <ListGroup.Item action className='project_repair_logs' href="#link1">
          Link 1
        </ListGroup.Item>
      </ListGroup>
      <h2>Project Name: {currentProject} </h2>
      <div className='project_parts'>
        <h3>Parts needed: {parts.part_name} | {parts.price} | {parts.part_number}</h3>
      </div>
      <div className='project_instructions'>
        <h3>Instructions: {instructions.map(instruction => <p key={instruction.id}>Step {instruction.id}: {instruction.steps}</p>)} </h3>
      </div>
      <div className='project_video'>
        <h3>Video: {video.name} | {video.video_url} </h3>
      </div>
      <div className='project_repair_logs'>
        <ul>Repair Logs: {repairLogs.map(log =>  <li key={log.id}> {log.description} | {log.mileage} </li>)}</ul>
      </div>
    </div>
  );
}

// page still needs work

export default SelectedProject; 