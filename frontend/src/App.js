import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='top-bar'>
        <span>Logo</span>
        <div className='sign-in'>
          <button>Sign up</button>
          <button>Login</button>
          <button>Logout</button>
        </div>
      </div>

      <nav>
        <div className='sidebar-user'>
          <div className='welcome'>
            <span>Welcome, <strong>User</strong></span>
            <button className='my-garage'>My Garage</button>
          </div>

          <div className='sidebar-menu'>
            <h5>Dashboard</h5>
            <button className='side-toggle'>Slide Toggle + Icon</button>
            <div className='user-car'>
              <p>Picture of Users Car</p>
              <form className='make-model-year'>
                <input className='car-make' type='text' placeholder='Make'/><br/>
                <input className='car-model' type='text' placeholder='Model'/><br/>
                <input className='car-year' type='text' placeholder='Year'/><br/>
                <input className='search-car' type='submit'/>
              </form>
            </div>
            <div className='repair-options'>
              <h5>What would you like to do?</h5>
              <p className='odd'>View Records</p>
              <p className='even'>Find Parts</p>
              <p className='odd'>Find Videos</p>
              <p className='even'>Find Garage</p>
            </div>
          </div>        

        </div>
      </nav>
      

    </div>
  );
}

export default App;
