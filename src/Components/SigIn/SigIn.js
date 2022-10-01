import React from 'react'
import {Nav, Button} from 'react-bootstrap';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import sigin from './sigin.css'
export default function SigIn() {

  const [showRegistration, setShowRegistration] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  const handleCloseRegistration = () => setShowRegistration(false);
  const handleShowRegistration = () => setShowRegistration(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

    return (
      <>
        <Nav className="sig-in-wrapper">
          <Button variant="success" onClick={handleShowLogin}>Вхід</Button>
          <Button variant="danger" onClick={handleShowRegistration}>
            Реєстрація
          </Button>
        </Nav>
        <Registration showRegistration={showRegistration} handleCloseRegistration={handleCloseRegistration} />
        <Login handleShowLogin={showLogin} handleCloseLogin={handleCloseLogin} />
      </>
    );
}
