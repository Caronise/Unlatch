import React from 'react';
import { Link } from 'react-router-dom';

// Once the state is passed to this component, then it should be able to set the state when the user submits
// I'm only tracking the username and not the password right?

function Landing(props) {
  const { user } = props.state;


  return (
    <>
    <h1>WELCOME TO Unlatched</h1>
    <h2>{user.name}</h2>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/register">Register</Link>
    </>
  );
}

export default Landing; 