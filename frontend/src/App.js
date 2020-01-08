import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import Header from './components/header';
import Garage from './components/header'; 
import Dashboard from './components/dashboard'
import Footer from './components/footer'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <p>Logo</p>
          <ul>
            <li>
              <Link to="/">Root</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/logout">Log out</Link>
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
              <p>WAZZZA</p>
            </Route>
            <Route path="/login">
              <p>Login Page</p>
            </Route>
            <Route path="/register">
              <p>Register Page</p>
            </Route>
            <Route path="/logout">
              <p>Logout Page</p>
            </Route>
            <Route path="/home">
              <p>Home Page</p>
            </Route>
            <Route exact path="/garage">
              <p>Garage Page</p>
            </Route>


            <Route path="/garage/:vehicle_id" children={<Vehicle />}>
              <p>Garage:vehicle_id Page </p><Vehicle />
            </Route>


            <Route exact path="/projects">
              <p>Projects Page</p>
            </Route>
            <Route path="/projects/:project_id" children>
              <p>Projects/:project_id Page</p>
            </Route>

          </Switch>

        </main>

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
