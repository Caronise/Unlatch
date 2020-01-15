import React, { useContext } from 'react';
import { UserContext } from '../helpers/UserContext';
import {
  Form
} from 'react-bootstrap';

function Projects({ projects, setCurrentProject}) {
  const user = useContext(UserContext);

  const handleSelection = (event) => {
    event.preventDefault();

    const chosenProject = projects.find((project) => project.id === Number(event.target.value));
    console.log("Chosen project: ", chosenProject);
    console.group("EVENT VALUE: ", event.target.value);

    setCurrentProject(chosenProject);
  };

  return (
    <div className='select_project'>
      <h5>{user && user.username}, which project would you like to do?</h5>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Projects:</Form.Label>
          <Form.Control onChange="this.form.submit()" as="select" name="vehicle_select" id="vehicle_select">
            <option>--Please choose a project--</option>
            {projects.map(project => <option value={project.id} onClick={handleSelection}> Project: {project.project_name} </option>)}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Projects;