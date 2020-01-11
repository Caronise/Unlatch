import React, { useContext } from 'react'
import { UserContext, VehiclesContext } from '../helpers/UserContext';


function Projects ({ allVehicles, projects, setCurrentProject }) { 
  const user = useContext(UserContext);
  const vehicles = useContext(VehiclesContext);

  const selectProject = (event) => {
    const chosenProject = projects.find((project) => project.id === Number(event.target.value));
    setCurrentProject(chosenProject);
  };
  
  return( 
    <div className='project_options'>
      <h5>{user && user.username}, which project would you like to do?</h5>
      <div>
        {projects.map(project => <React.Fragment>
        <button value={project.make_name} onClick={selectProject}>Project {project.id}</button>
        <br />
        </React.Fragment>)}
      </div>
    </div>
  );
};

export default Projects;