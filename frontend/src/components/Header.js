import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../helpers/UserContext';
import {
  Button,
  Navbar,
  Image,
  ButtonGroup
} from 'react-bootstrap';



function Header() {
  const user = useContext(UserContext);


  return (
    <Navbar className='unlatch-nav nav-bar' bg='dark' variant='dark' style={{justifyContent: `space-between`}}>
      <Link to="/"> <Image className='logo' src="../images/logo.png" alt="Logo" fluid/> </Link>
      {user && <>
      <div className='username_header'>
        <ButtonGroup>
          <Button variant="outline-warning" className='user-garage' >{user.username}'s Garage</Button>
        </ButtonGroup>
      </div>
      </>}
    </Navbar>
  );
}

export default Header;