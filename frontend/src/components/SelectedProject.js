import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  ListGroup
} from 'react-bootstrap';

function SelectedProject({ currentProject }) {
  const [loaded, setLoaded] = useState(false);
  const [parts, setParts] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [video, setVideo] = useState(null);
  const [repairLogs, setRepairLogs] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/projects/${currentProject.id}/parts`),

      axios.get(`/projects/${currentProject.id}/instructions`),

      axios.get(`/projects/${currentProject.id}/videos`),

      axios.get(`/projects/${currentProject.id}/repair_logs`),
    ])
      .then((all) => {
        // console.log("The result of the parts query: ", all[0].data[0]);
        setParts(all[0].data[0]);
        // console.log("The result of the instructions query: ", all[1].data);
        setInstructions(all[1].data);
        // console.log("The result of the video query: ", all[2].data[0]);
        setVideo(all[2].data[0]);
        // console.log("The result of the repair logs query: ", all[3].data)
        setRepairLogs(all[3].data);
        setLoaded(true);
      })
  }, []);

  return (
    <>
      {loaded &&
        <div className='selected_project'>
          <h2>Project Name: {currentProject.project_name} </h2>
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
                <td>{currentProject.difficulty}</td>
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
            <h3>Video: {video.name} </h3>
            <iframe width="410" height="315" src={video.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='project_repair_logs'>
            <ul>Repair Logs: {repairLogs.map(log => <li key={log.id}> {log.description} @ {log.mileage} | {log.cost_of_repair} on {log.timestamp} </li>)}</ul>
          </div>
        </div >
      }

      {!loaded && <h1>Loading...</h1>}
    </>
  );
}

export default SelectedProject; 