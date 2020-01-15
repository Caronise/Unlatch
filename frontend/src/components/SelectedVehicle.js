import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Projects from '../components/Projects';
import {
  Card
} from 'react-bootstrap';
import Footer from '../components/Footer'


function SelectedVehicle({ currentVehicle, projects, setCurrentProject, setUser }) {
  const [engine, setEngine] = useState("")

  // useEffect( () => {
  //   const url = `http://api.carmd.com/v3.0/engine?year=${currentVehicle.year}&make=${currentVehicle.make_name}&model=${currentVehicle.model_name}`
  //   axios.get(url, { headers: {
  //     "content-type":"application/json",
  //     "authorization":"Basic ZmVhZDgwOGItZDk3ZC00MzkxLTkwYzktYzgzOWEzOThhYjVl",
  //     "partner-token":"e8bdb75d808f43319a8dd760b1188aac"}        
  //   }).then(res => {
  //     console.log(res.data)
  //     setEngine(res.data.data[0])
  //   }) 
  //   .catch(err => console.log(err))
  // }, [currentVehicle.make, currentVehicle.modelName])


  return (
    <div className='selected_vehicle'>
      <h2 className="current_vehicle_title">You're currently working on:</h2>
      <div className='selected_card'>
        <Card border="dark" bg="dark" text="white" style={{ width: "60%"}}>
          <Card.Img variant="top" src={currentVehicle.picture_url}/>
          <Card.Body>
            <Card.Title>{currentVehicle.make_name} {currentVehicle.model_name} </Card.Title>
            <Card.Text>
              Year: {currentVehicle.year}
              <br/>
              Info: {/* {engine.split(" ").map((engineSpec) => <span>{engineSpec} </span>)} */}
            </Card.Text>
          </Card.Body>
        </Card>
        <Projects projects={projects} setCurrentProject={setCurrentProject} />
      </div>
      <Footer setUser={setUser} />
    </div>
  );
}

export default SelectedVehicle; 