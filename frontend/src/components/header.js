import React from 'react'


function Header () { 
  return( <div className='top-bar'>
           <span>Logo</span>
           <div className='sign-in'>
             <button>Sign up</button>
             <button>Login</button>
             <button>Logout</button>
           </div>
         </div> 
         );  
}

export default Header; 