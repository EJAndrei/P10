import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#343a40', padding: '10px' }}>
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" style={{ color: '#fff', fontWeight: 'bold' }}>
          Carhartt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Shirts" style={{ color: '#fff' }}>
              Shirts
            </Nav.Link>
            <Nav.Link as={Link} to="/ShortsAndJackets" style={{ color: '#fff' }}>
              Shorts & Jackets
            </Nav.Link>
            <Nav.Link as={Link} to="/Pants" style={{ color: '#fff' }}>
              Pants
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title={user?.username || 'Account'} id="basic-nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/dashboard/logbook">Logbook</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
