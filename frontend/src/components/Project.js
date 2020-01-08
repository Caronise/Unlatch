import React from 'react'


function Project () { 
  return( 
    <div className='info'>
      <button className='show_info'> Show Info</button>
      {/* Name of the project goes here */}
      Project name 
      <div className='parts'>Parts
      {/* Parts name, price, part_number etc go here */}
      </div>
      <div className='instructions'> Instructions 
      {/* The instructions go in here for the repair, steps etc */}
      </div>
      <div className='video'> Video
      {/* Your video/s goes here */}
      </div>
      <div className='notes'> Notes
      {/* Your notes go in here  */}
      </div>
    </div>
  );  
}

export default Project; 