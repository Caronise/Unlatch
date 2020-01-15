import React, { useContext } from 'react';
import { UserContext } from '../helpers/UserContext';
import { useHistory } from 'react-router-dom';

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

        <label>Choose a project:</label>
        <select name="vehicle_select" id="vehicle_select">
          <option value="">--Please select a project--</option>
          {projects.map(project => <option key={project.id} value={project.id} onClick={handleSelection}> Project: {project.project_name} </option>)}
        </select>

        <br />
      </div>
    </div>
  );
};

export default Projects;