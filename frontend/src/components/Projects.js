import React from 'react'


function Projects () { 
  return( 
    <div className='projects'>
      <button className='show_info'> Show Info</button>
      <br />
      {/* Name of the project goes here */}
      <h2>Project Name</h2> 
      <div className='project_parts'>Parts
      {/* Parts name, price, part_number etc go here */}
      </div>
      <div className='project_instructions'> Instructions 
      {/* The instructions go in here for the repair, steps etc */}
      </div>
      <div className='project_video'> Video
      {/* Your video/s goes here */}
      </div>
      <div className='project_notes'> Notes
      {/* Your notes go in here  */}
      </div>
    </div>
  );  
}

export default Projects; 