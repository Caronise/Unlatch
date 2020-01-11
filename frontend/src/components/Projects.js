import React, { useContext } from 'react'
import { UserContext, VehiclesContext } from '../helpers/UserContext';


function Projects () { 
  const user = useContext(UserContext);
  const vehicles = useContext(VehiclesContext);

  console.log(user.username);
  console.log(vehicles[0].id);
  
  return( 
    <div className='project_options'>
      <h5>What would you like to do?</h5>
      <p className='odd'>Project One</p>
      <p className='even'>Project Two</p>
    </div>
  );  
}

export default Projects;