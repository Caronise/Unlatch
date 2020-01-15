import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css';

import SelectedVehicle from './components/SelectedVehicle';
import Footer from './components/Footer';
import Garage from './components/Garage';
import AddVehicle from './components/AddVehicle';
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/Login';
import Projects from './components/Projects';
import Register from './components/Register';
import SelectedProject from './components/SelectedProject';
import AddRepairLog from './components/AddRepairLog';

import { UserContext, VehiclesContext } from "./helpers/UserContext";

export default function App() {

  const [user, setUser] = useState(null);

  const [userVehicles, setUserVehicles] = useState([]);

  const [currentVehicle, setCurrentVehicle] = useState(null);

  const [projects, setProjects] = useState([]);

  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
      axios.get("/users/1/vehicles")
        .then((result) => {
        console.log("The result of the vehicle: ", result.data);
        setUserVehicles(result.data)
    });
  }, []);

  return (
    <UserContext.Provider value={user} >
      <VehiclesContext.Provider value={userVehicles}>
        <Router>
          <div>
            <nav>
              <Header />
            </nav>

            <main>
              <Switch>
                <Route exact path='/' render={(props) => <Landing setUser={setUser} />} />

                <Route path="/login" render={(props) => <Login setUser={setUser} />} />

                <Route path="/register" render={(props) => <Register setUser={setUser} />} />

                <Route exact path="/garage" render={(props) => <Garage {...props} setUser={setUser} setCurrentVehicle={setCurrentVehicle} setProjects={setProjects}/>} />

                <Route path="/garage/add_vehicle" render={(props) => <AddVehicle {...props} setUser={setUser} />} />

                <Route path="/garage/:vehicle_id" render={(props) => <SelectedVehicle {...props} setUser={setUser} currentVehicle={currentVehicle} projects={projects} setCurrentProject={setCurrentProject} />} />

                <Route exact path="/projects" render={(props) => <Projects {...props} setUser={setUser} projects={projects} setCurrentProject={setCurrentProject} />} />

                <Route path="/projects/:project_id" render={(props) => <SelectedProject {...props} currentVehicle={currentVehicle} currentProject={currentProject} />} />

                <Route path="/repair_logs" render={(props) => <AddRepairLog setUser={setUser} currentVehicle={currentVehicle} currentProject={currentProject} />} />

              </Switch>
            </main>

            <div>
              {/* <ul>
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
                <li>
                  <Link to="/repair_logs">Add repair log</Link>
                </li>
              </ul> */}
            </div>
          </div>
        </Router>
      </VehiclesContext.Provider>
    </UserContext.Provider>
  );
}
