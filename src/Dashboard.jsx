import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button'
import { jwtDecode } from 'jwt-decode';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import {FormControl, Dropdown, DropdownButton, Carousel } from 'react-bootstrap';
import { API_ENDPOINT } from './Api'

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDecodeUserID = () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'))?.data?.token;
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
      } catch (error) {
        navigate('/login');
      }
    };

    fetchDecodeUserID();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const cardsData = [
    { image: 'Carhartt Shirt.jpg', title: 'Carhartt Shirt', description: 'Find durable and stylish Carhartt shirts.' },
    { image: 'Carhartt Short.jpg', title: 'Carhartt Short', description: 'Stay cool and comfortable with Carhartt Short.' },
    { image: 'Carhartt Jacket.jpg', title: 'Carhartt Jacket', description: 'Weather any storm with Carhartt jacket.' },
    { image: 'Carhartt Pants.jpg', title: 'Carhartt Pants', description: 'Experience rugged durability with Carhartt pants.' },
  ];

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">Carhartt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Shirt">Shirt</Nav.Link>
              <Nav.Link href="#Shorts & Jackets">Shorts & Jackets</Nav.Link>
              <Nav.Link href="#Pants">Pants</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title={user?.username || 'Account'} id="basic-nav-dropdown" align="end">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="text-center my-5">
        <h1>Welcome to Carhartt</h1>
        <p>Discover your style with our exclusive collections.</p>
      </Container>

      <Container>
        <Row>
          {cardsData.map((card, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
