import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Projects from '../components/Projects';
import {
  Card
} from 'react-bootstrap';


function SelectedVehicle({ currentVehicle, projects, setCurrentProject }) {
  const [engine, setEngine] = useState([])

  // useEffect( () => {
  //   const url = `http://api.carmd.com/v3.0/engine?year=${currentVehicle.year}&make=${currentVehicle.make_name}&model=${currentVehicle.model_name}`
  //   axios.get(url, { headers: {
  //     "content-type":"application/json",
  //     "authorization":"Basic ZmIwNjQ5MWYtMDMzYy00NzA5LTgzNDItMTM2NTBmZjdhYWUx",
  //     "partner-token":"4fba13f763ec4f15ad40f55ce3b1bf3b"}        
  //   }).then(res => {setEngine(res.data)}) 
  // }, [make, modelName])


  return (
    <div className='selected_vehicle'>
      <h3 className="current_vehicle_title">You're currently working on:</h3>
      <div className='selected_card'>
        <Card>
          <Card.Img variant="top"/>
          {/* src={currentVehicle.picture_url} */}
          <Card.Body>
            <Card.Title>{currentVehicle.make_name} {currentVehicle.model_name} </Card.Title>
            <Card.Text>
              Year: {currentVehicle.year}
            </Card.Text>
          {/* <p>{response}</p> */}
          {/* <p>Info : {engine.map((engineSpec) => <span>{engineSpec} </span>)} </p> */}
          </Card.Body>
        </Card>
        <Projects projects={projects} setCurrentProject={setCurrentProject} />
      </div>
    </div>
  );
}

export default SelectedVehicle; 