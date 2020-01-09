import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import useApplication from './hooks/useApplication';

import Home from './components/Home';
import Footer from './components/Footer';
import Garage from './components/Garage'; 
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/Login';
import Project from './components/Project';
import Register from './components/Register';

export default function App() {
  // const { state, dispatch } = useApplication();
  
  
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/garage">Garage</Link>
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
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/garage">
              <Garage />
            </Route>


            <Route path="/garage/:vehicle_id" render={routeProps => (
              <Vehicle {...routeProps} /> 
            )}>
              <p>Garage:vehicle_id Page </p><Vehicle />
            </Route>


            <Route exact path="/projects">
              <Project />
            </Route>
            <Route path="/projects/:project_id" children>
              <Project />
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
