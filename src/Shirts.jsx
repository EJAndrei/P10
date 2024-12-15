import React from 'react';
import NavbarComponent from './NavbarComponent'; // Adjust the path as needed
import { Container, Row, Col, Card } from 'react-bootstrap';

const shirtsData = [
  { image: 'T-Shirt.jpg', title: 'Classic Work Shirt', description: 'Durable, comfortable, and stylish for any job.' },
  { image: 'Bottom Up.jpg', title: 'Button-Up Shirt', description: 'Perfect blend of casual and professional.' },
  { image: 'MasterShirt.jpg', title: 'Performance Tee', description: 'Stay cool and dry with moisture-wicking fabric.' },
  { image: 'Carhartt T-Shirt.jpg', title: 'Carhartt T-Shirt', description: 'Classic comfort with Carhartt T-shirts.' },
  { image: 'Carhartt Denim Shirt.jpg', title: 'Carhartt Denim Shirt', description: 'Durable and stylish Carhartt denim shirts.' },
];

const Shirts = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Example: Fetch user from storage or state

  return (
    <>
      <NavbarComponent user={user} onLogout={() => localStorage.removeItem('token')} />
      <Container className="my-5">
        <h2 className="text-center mb-4">Shirts Collection</h2>
        <Row>
          {shirtsData.map((shirt, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={shirt.image} />
                <Card.Body>
                  <Card.Title>{shirt.title}</Card.Title>
                  <Card.Text>{shirt.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shirts;
