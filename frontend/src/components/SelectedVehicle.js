import React, { useState, useEffect } from 'react'
import axios from 'axios';


function SelectedVehicle({ currentVehicle }) {
  const [make, setMake] = useState(null)
  const [modelName, setModelName] = useState(null)
  const [engine, setEngine] = useState([])

  useEffect( () => {
    Promise.all ([
      axios.get(`http://localhost:8000/makes/${currentVehicle.id}`, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }}).then( res => setMake(res.data[0].make_name) ),
      
      axios.get(`http://localhost:8000/makes/${currentVehicle.id}/models/${currentVehicle.model_id}`, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }}).then( res => setModelName(res.data[0].model_name) )
    ])
  },[])

  useEffect( () => {

    const url = `http://api.carmd.com/v3.0/engine?year=${currentVehicle.year}&make=${make}&model=${modelName}`
    axios.get(url, {headers: {
      "content-type":"application/json",
      "authorization":"Basic ZmIwNjQ5MWYtMDMzYy00NzA5LTgzNDItMTM2NTBmZjdhYWUx",
      "partner-token":"4fba13f763ec4f15ad40f55ce3b1bf3b"}        
    }).then(res => {setEngine(res.data)}) 
  }, [make, modelName])


  return (
    <div className='selected_vehicle'>
      <h5>You're currently working on: {currentVehicle.make_name}</h5>
      <div className='selected_car'>
        <p>Picture: {currentVehicle.picture_url}</p>
        <p>Make: {make}</p>
        <p>Model: {modelName}</p>
        <p>Year: {currentVehicle.year}</p>
        {/* <p>{response}</p> */}
        {/* <p>Info : {engine.map((engineSpec) => <span>{engineSpec} </span>)} </p> */}
      </div>
    </div>
  );
}

export default SelectedVehicle; 