import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectedProject({ currentProject }) {
  const [parts, setParts] = useState({});
  const [instructions, setInstructions] = useState([]);
  const [video, setVideo] = useState({});
  const [notes, setNotes] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:8000/projects/${currentProject.id}/parts`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }).then(res => setParts(res.data[0])),

      axios.get(`http://localhost:8000/projects/${currentProject.id}/instructions`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then(res => {
        setInstructions(res.data)
      }),

      axios.get(`http://localhost:8000/projects/${currentProject.id}/videos`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then(res => setVideo(res.data[0])),

      axios.get(`http://localhost:8000/projects/${currentProject.id}/notes`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then(res => setNotes(res.data[0]))
    ])
  }, []);


  return (
    <div className='selected_project'>
      <h2>Project Name: {currentProject.project_name} </h2>
      <div className='project_parts'>
        <h3>Parts needed: {parts.part_name} | {parts.price} | {parts.part_number}</h3>
      </div>
      <div className='project_instructions'>
        <h3>Instructions: {instructions.map(instruction => <p key={instruction.id}>Step {instruction.id}: {instruction.steps}</p>)} </h3>
      </div>
      <div className='project_video'>
        <h3>Video: {video.name} | {video.video_url} </h3>
      </div>
      <div className='project_notes'>
        <h3>Notes: {notes.description} | {notes.mileage} </h3>
      </div>
    </div>
  );
}

export default SelectedProject; 