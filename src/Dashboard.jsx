import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDecodeUserID = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'))?.data?.token;
        if (!token) {
          navigate('/login');
          return;
        }
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
    { image: 'Carhartt T-Shirt.jpg', title: 'Carhartt T-Shirt', description: 'Classic comfort with Carhartt T-shirts.' },
    { image: 'Carhartt Denim Shirt.jpg', title: 'Carhartt Denim Shirt', description: 'Durable and stylish Carhartt denim shirts.' },
    { image: 'Carhartt Cargo Short.jpg', title: 'Carhartt Cargo Short', description: 'Functional and rugged Carhartt cargo shorts.' },
    { image: 'Carhartt Work Short.jpg', title: 'Carhartt Work Short', description: 'Reliable Carhartt shorts for tough jobs.' },
    { image: 'Carhartt Rain Jacket.jpg', title: 'Carhartt Rain Jacket', description: 'Stay dry and protected with Carhartt rain jackets.' },
    { image: 'Carhartt Winter Jacket.jpg', title: 'Carhartt Winter Jacket', description: 'Beat the cold with Carhartt winter jackets.' },
    { image: 'Carhartt Work Pants.jpg', title: 'Carhartt Work Pants', description: 'Dependable Carhartt pants for any task.' },
    { image: 'Carhartt Cargo Pants.jpg', title: 'Carhartt Cargo Pants', description: 'Carry more with Carhartt cargo pants.' }
];

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#343a40', padding: '10px' }}>
        <Container>
          <Navbar.Brand as={Link} to="/dashboard" style={{ color: '#fff', fontWeight: 'bold' }}>Carhartt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Shirts" style={{ color: '#fff' }}>Shirts</Nav.Link>
              <Nav.Link as={Link} to="/ShortsAndJackets" style={{ color: '#fff' }}>Shorts & Jackets</Nav.Link>
              <Nav.Link as={Link} to="/Pants" style={{ color: '#fff' }}>Pants</Nav.Link>
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

      <Container className="text-center my-5">
        <h1 style={{ color: '#343a40', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to Carhartt</h1>
        <p style={{ color: '#6c757d' }}>Discover your style with our exclusive collections.</p>
      </Container>

      <Container>
        <Row>
          {cardsData.map((card, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow" style={{ borderRadius: '10px' }}>
                <Card.Img variant="top" src={card.image} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <Card.Body>
                  <Card.Title style={{ color: '#343a40', fontWeight: 'bold' }}>{card.title}</Card.Title>
                  <Card.Text style={{ color: '#6c757d' }}>{card.description}</Card.Text>
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
