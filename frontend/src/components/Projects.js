import React, { useContext } from 'react'
import { UserContext } from '../helpers/UserContext';
import {
  Nav
} from 'react-bootstrap'

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
        <Nav variant="tabs" defaultActiveKey="/home">
          {projects.map(project => <React.Fragment>
            <Nav.Item>
              <Nav.Link href={`/projects/${project.id}`} justify activeKey={project.id} value={project.id} onClick={selectProject}>Project: {project.project_name}</Nav.Link>
            </Nav.Item>
          </React.Fragment>)}
        </Nav>
        <br />
      </div>
    </div>
  );
};

export default Projects;