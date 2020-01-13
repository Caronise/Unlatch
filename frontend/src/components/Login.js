import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { UserContext } from "../helpers/UserContext";


function Login({ setUser }) {
  const user = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = (event) => {
    event.preventDefault()

    axios.post('/login', { email, password })
      .then((result) => {
        // authenticateUser(email, password)
        console.log(result.data)
        setUser(result.data)
      })
      .catch(err => console.log(err))
  };

  if (user === null) {
    return (
      <div className="login">
        <form id="login-form" onSubmit={authenticate}>
          <p>Email: </p>
          <input id="email" name="email" type="email" placeholder="example@email.com" value={email} onChange={event => setEmail(event.target.value)} />
          <p>Password: </p>
          <input id="password" name="password" type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)} />
          <input type="submit" value="Submit" />
        </form>
        <button className="login_back_btn">Back</button>
      </div>
    );
  } else {
    return (<Redirect to='/garage' />);
  }

}

export default Login; 