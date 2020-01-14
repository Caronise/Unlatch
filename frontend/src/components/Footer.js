import React, {useContext} from 'react'
import {
  Button
} from 'react-bootstrap';
import { UserContext } from "../helpers/UserContext";
import { useHistory } from 'react-router-dom';




function Footer(props) {
  const {setUser} = props
  let history = useHistory();
  const user = useContext(UserContext);
    
  
  const logout = function() {
      setUser(null);
      history.push("/")
    };

  return (
    <div className='footer'>
      <br />
      {user && 
        <Button variant="outline-danger" onClick={logout} className="logout logout-btn" action="/logout" method="GET">Logout</Button>
      }
    </div>
  );
}

export default Footer; 