import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  ListGroup,
  Card
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
  }, [currentProject]);

  return (
    <>
      {loaded &&
      <div className='selected_project_page'>
        <div className='project_video'>
          <h3>{video.name} </h3>
          <iframe title="Intructional Video" width="100%" src={video.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
          <h2 className="project_label">{currentProject.project_name}</h2>
          <Table responsive='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Parts Needed</th>
                <th>Price of Part(s)</th>
                <th>Serial Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{parts.part_name}</td>
                <td>{parts.price}</td>
                <td>{parts.part_number}</td>
              </tr>
            </tbody>
          </Table>
          <h3 className="instructions_label">Instructions:</h3>
          <h5 className="instructions_label">Repair Difficulty -> <strong>{currentProject.difficulty}</strong></h5>
          <ListGroup defaultActiveKey={instructions}>
            {instructions.map(instruction =>
              <ListGroup.Item className="btn-dark" eventKey={instructions}>
                <span key={instruction.id}>{instruction.steps}</span>
              </ListGroup.Item>
            )}
          </ListGroup>
          <div className='project_repair_logs'>
            <h3 className="repair-log-label">Repair Logs:</h3>
              {repairLogs.map(log =>
            <Card bg="secondary" text="white">
                <Card.Body>
                  <span key={log.id}> {log.description} @ {log.mileage} | {log.cost_of_repair} on {log.timestamp} </span>
                </Card.Body>
            </Card>
              )}
          </div>
        </div >
      }

      {!loaded && <h1>Loading...</h1>}
    </>
  );
}

export default SelectedProject; 