import React, { useContext } from 'react'
import { UserContext } from '../helpers/UserContext';

function Projects ({ currentVehicle, projects, setCurrentProject }) { 
  const user = useContext(UserContext);

  const selectProject = (event) => {
    event.preventDefault();

    const chosenProject = projects.find((project) => project.id === Number(event.target.value));
    setCurrentProject(chosenProject);
  };
  
  return( 
    <div className='select_project'>
      <h5>{user && user.username}, which project would you like to do?</h5>
      <div>
        {projects.map(project => <React.Fragment>
        <button key={project.id} value={project.id} onClick={selectProject}>Project: {project.project_name} -- {project.difficulty} </button>
        <br />
        </React.Fragment>)}
      </div>
    </div>
  );
};

export default Projects;