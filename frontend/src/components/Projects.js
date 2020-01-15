import React, { useContext } from 'react';
import { UserContext } from '../helpers/UserContext';
import { useHistory } from 'react-router-dom';
import { 
  Form
 } from 'react-bootstrap';

function Projects({ projects, setCurrentProject}) {
  let history = useHistory();
  const user = useContext(UserContext);

  const handleSelection = (event) => {
    event.preventDefault();

    const chosenProject = projects.find((project) => project.id === Number(event.target.value));
    console.log("Chosen project: ", chosenProject);
    console.group("EVENT VALUE: ", event.target.value);

    setCurrentProject(chosenProject);
    history.push(`/projects/${chosenProject.id}`);
  };

  return (
    <div className='select_project'>
      <h5>{user && user.username}, which project would you like to do?</h5>
      <div>
        <Form.Group>
          <Form.Label>My Project:</Form.Label>
          <Form.Control onChange={handleSelection} as="select" className="project_select_form">
            <option hidden>--Please select a project--</option>
            {projects.map(project => 
            <option value={project.id}>{project.project_name}</option>)
            }
          </Form.Control>
        </Form.Group>
      </div>
    </div>
  );
};

export default Projects;