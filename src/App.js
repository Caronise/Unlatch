import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class='top-bar'>
        <span>Logo</span>
        <div class='sign-in'>
          <button>Sign up</button>
          <button>Login</button>
          <button>Logout</button>
        </div>
      </div>

      <nav>
        <div class='sidebar-user'>
          <div class='welcome'>
            <span>Welcome, <strong>User</strong></span>
            <button class='user-cars'>My Garage</button>
          </div>

          <div class='sidebar-menu'>
            <h5>Dashboard</h5>
            <button>Slide Toggle + Icon</button>
            <div class='user-car'>
              <p>Picture of Users Car</p>
              <p>Make</p>
              <p>Model</p>
              <p>Year</p>
            </div>
            <div class='repair-options'>
              <h5>What would you like to do?</h5>
              <p>View Records</p>
              <p>Find Parts</p>
              <p>Find Videos</p>
              <p>Find Garage</p>
            </div>
          </div>        

        </div>
      </nav>
      

    </div>
  );
}

export default App;
