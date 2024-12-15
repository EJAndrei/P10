import React from 'react';
import NavbarComponent from './NavbarComponent'; // Adjust the path as needed
import { Container, Row, Col, Card } from 'react-bootstrap';

const pantsData = [
  { image: 'Cargo Pants.jpg', title: 'Cargo Pants', description: 'Functional and rugged for all-day wear.' },
  { image: 'Pants Again.jpg', title: 'Canvas Work Pants', description: 'Heavy-duty and built to last.' },
  { image: 'Flex Pants.jpg', title: 'Flex Work Pants', description: 'Added stretch for extra mobility.' },
  { image: 'Carhartt Work Pants.jpg', title: 'Carhartt Work Pants', description: 'Dependable Carhartt pants for any task.' },
  { image: 'Carhartt Cargo Pants.jpg', title: 'Carhartt Cargo Pants', description: 'Carry more with Carhartt cargo pants.' }
];

const Pants = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Example: Fetch user from storage or state

  return (
    <>
      <NavbarComponent user={user} onLogout={() => localStorage.removeItem('token')} />
      <Container className="my-5">
        <h2 className="text-center mb-4">Pants Collection</h2>
        <Row>
          {pantsData.map((pants, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={pants.image} />
                <Card.Body>
                  <Card.Title>{pants.title}</Card.Title>
                  <Card.Text>{pants.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Pants;
