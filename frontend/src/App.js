import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';

import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Garage from './components/Garage'; 
import AddVehicle from './components/AddVehicle';
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/Login';
import Projects from './components/Projects';
import Register from './components/Register';
import SelectedProject from './components/SelectedProject';

export default function App() {

  // I NEED TO USE A HOOK TO TRACK WHEN THE USER LOGS IN / REGISTERS

  const [ user, setUser ] = useState("");
  const [ vehicles, setVehicles ] = useState({})
  
  // I think it then needs to be passed into the component as a key / value 
  
  
  return (
    <Router>
      <div>
        <nav>
          <Header />
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/garage">Garage</Link>
            </li>
            <li>
              <Link to="/garage/add_vehicle">Add a vehicle</Link>
            </li>
            <li>
              <Link to="/garage/:vehicle_id">Garage:vehicle_id</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/projects/:project_id">Projects/:project_id</Link>
            </li>
          </ul>
        </nav>

        <main>

          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/garage">
              <Garage />
            </Route>

            <Route path="/garage/add_vehicle">
              <AddVehicle />
            </Route>

            <Route path="/garage/:vehicle_id" render={routeProps => (
              <Vehicle {...routeProps} /> 
            )}>
              <p>Garage:vehicle_id Page </p><Vehicle />
              <Dashboard />
            </Route>


            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="/projects/:project_id" children>
              <SelectedProject />
            </Route>
          </Switch>

        </main>
        <Footer />

      </div>
    </Router>
  );
}

function Vehicle() {
  let { vehicle_id } = useParams();

  return (
    <div>
      <h3>ID: {vehicle_id}</h3>
    </div>
  );
}
