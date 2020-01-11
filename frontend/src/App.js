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

import { UserContext, VehiclesContext } from "./helpers/UserContext";

export default function App() {

  
  const [user, setUser] = useState({
    id: 1,
    username: "Franky",
    email: "Franky@unlatch.com"
  });
  const [vehicles, setVehicles] = useState([
    {
      id: 0,
      make_id: "ex_make_id",
      model_id: "ex_model_id",
      year: 2077,
      picture_url: "ex_picture_url",
      make_name: "Wagon"
    },
    {
      id: 1,
      make_id: "ex_make_id",
      model_id: "ex_model_id",
      year: 2099,
      picture_url: "ex_picture_url",
      make_name: "Potato"
    },
  ]);
  const [currentVehicle, setCurrentVehicle] = useState(null);
  
  
  useEffect(() => {
    Promise.all([
      axios.get("/users/1/vehicles")
    ]).then((result) => {
      setVehicles(result)
    });
  }, []);


  return (
    <UserContext.Provider value={user} >
      <VehiclesContext.Provider value={vehicles}>
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
                <Route exact path="/garage" render={(props) => <Garage {...props} setCurrentVehicle={setCurrentVehicle} />} />

                <Route path="/garage/add_vehicle">
                  <AddVehicle />
                </Route>

                <Route path="/garage/:vehicle_id" render={(props) => <SelectedVehicle {...props} currentVehicle={currentVehicle}/> }/>


                <Route exact path="/projects">
                  <Projects user={user} vehicles={vehicles} />
                </Route>
                <Route path="/projects/:project_id">
                  <SelectedProject user={user} vehicles={vehicles} />
                </Route>
              </Switch>
            </main>
            <Footer />

          </div>
        </Router>
      </VehiclesContext.Provider>
    </UserContext.Provider>
  );
}
