import React from 'react';
import NavbarComponent from './NavbarComponent'; // Adjust the path as needed
import { Container, Row, Col, Card } from 'react-bootstrap';

const shortsAndJacketsData = [
  { image: 'Short.jpg', title: 'Utility Shorts', description: 'Stay comfortable and mobile with rugged utility shorts.' },
  { image: 'Carhartt Jacket.jpg', title: 'Workwear Jacket', description: 'Warm, durable, and made for hard work.' },
  { image: 'Winter Jacket.jpg', title: 'Rain Defender', description: 'Water-resistant jacket for any weather.' },
  { image: 'Carhartt Cargo Short.jpg', title: 'Carhartt Cargo Short', description: 'Functional and rugged Carhartt cargo shorts.' },
  { image: 'Carhartt Work Short.jpg', title: 'Carhartt Work Short', description: 'Reliable Carhartt shorts for tough jobs.' },
  { image: 'Carhartt Rain Jacket.jpg', title: 'Carhartt Rain Jacket', description: 'Stay dry and protected with Carhartt rain jackets.' },
  { image: 'Carhartt Winter Jacket.jpg', title: 'Carhartt Winter Jacket', description: 'Beat the cold with Carhartt winter jackets.' },
];

const ShortsAndJackets = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Example: Fetch user from storage or state

  return (
    <>
      <NavbarComponent user={user} onLogout={() => localStorage.removeItem('token')} />
      <Container className="my-5">
        <h2 className="text-center mb-4">Shorts & Jackets Collection</h2>
        <Row>
          {shortsAndJacketsData.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShortsAndJackets;
