import React, { useState /*, useEffect */ } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import axios from 'axios';
import './App.css';
import newCar from './images/charger.jpg';
import oldCar from './images/impala.jpg';

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

import { UserContext, VehiclesContext } from "./helpers/UserContext";

export default function App() {

  const [user, setUser] = useState({
    id: 1,
    username: "Franky",
    email: "Franky@unlatch.com"
  });

  const [userVehicles, setUserVehicles] = useState([
    {
      id: 1,
      make_id: 4,
      model_id: 48,
      year: 2077,
      picture_url: "https://i.gaw.to/content/photos/39/83/398337_Dodge_Charger.jpg?460x287",
      make_name: "Modern_Legend"
    },
    {
      id: 2,
      make_id: "Chevrolet",
      model_id: "Impala",
      year: 1967,
      picture_url: oldCar,
      make_name: "Old_Legend"
    },
  ]);

  const fakeDbVehicle = {
    id: 1,
    make_id: 4,
    model_id: 48,
    year: 2077,
    picture_url: "https://i.gaw.to/content/photos/39/83/398337_Dodge_Charger.jpg?460x287",
    make_name: "Modern_Legend"
  }

  const [currentVehicle, setCurrentVehicle] = useState(fakeDbVehicle);

  const [projects, setProjects] = useState([
    {
      id: 1,
      vehicle_id: 1,
      project_name: "Alpha",
      difficulty: "Easy"
    },
    {
      id: 2,
      vechicle_id: 1,
      project_name: "Omega",
      difficulty: "Medium"
    }
  ]);

  const [currentProject, setCurrentProject] = useState(null);

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/users/1/vehicles")
  //   ]).then((result) => {
  //     setUserVehicles(result)
  //   });
  // }, []);


  return (
    <UserContext.Provider value={user} >
      <VehiclesContext.Provider value={userVehicles}>
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
                <Route exact path='/' render={(props) => <Landing />} />

                <Route path="/login" render={(props) => <Login />} />

                <Route path="/register" render={(props) => <Register />} />

                <Route exact path="/garage" render={(props) => <Garage {...props} setCurrentVehicle={setCurrentVehicle} />} />

                <Route path="/garage/add_vehicle" render={(props) => <AddVehicle />} />

                <Route path="/garage/:vehicle_id" render={(props) => <SelectedVehicle {...props} currentVehicle={currentVehicle} />} />

                <Route exact path="/projects" render={(props) => <Projects {...props} user={user} currentVehicle={currentVehicle} projects={projects} setCurrentProject={setCurrentProject} />} />
                  
                <Route path="/projects/:project_id" render={(props) => <SelectedProject user={user} currentVehicle={currentVehicle} currentProject={currentProject} />} />

              </Switch>
            </main>
            <Footer />

          </div>
        </Router>
      </VehiclesContext.Provider>
    </UserContext.Provider>
  );
}
