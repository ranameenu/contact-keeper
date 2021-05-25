import React from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Badge,
} from 'react-bootstrap';
import { HiMail } from 'react-icons/hi';
import { AiTwotonePhone } from 'react-icons/ai';

const Addcontact = () => {
  return (
    <div className="form add-contact">
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <h1 className="account-heading text-center">Add Contact</h1>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Control type="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Control type="password" placeholder="Create password" />
            </Form.Group>

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio button for following text input" />
              </InputGroup.Prepend>
              <FormControl aria-label="Text input with radio button" />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio button for following text input" />
              </InputGroup.Prepend>
              <FormControl aria-label="Text input with radio button" />
            </InputGroup>

            <Button className="submit" variant="primary" type="submit">
              Add Contact
            </Button>
          </Form>
        </Col>
        <Col lg={4}>
          <Form>
            <Form.Group controlId="search-contact">
              <Form.Control
                type="search-contact"
                placeholder="Filter Contact"
              />
            </Form.Group>
          </Form>
          <div className="contact-list">
            <Card>
              <Card.Body>
                <Card.Title>
                  Umesh Kumar <Badge className="contact-type">Personal</Badge>
                </Card.Title>
                <Card.Text>
                  <p>
                    <HiMail /> umesh@gmail.com
                  </p>

                  <p>
                    <AiTwotonePhone /> 999-999-9999
                  </p>
                </Card.Text>
                <Button className="edit-contact" type="submit">
                  Edit
                </Button>{' '}
                <Button className="delete-contact" type="submit">
                  Delete
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  Rakesh{' '}
                  <Badge className="contact-type" variant="success">
                    Personal
                  </Badge>
                </Card.Title>
                <Card.Text>
                  <p>
                    {' '}
                    <HiMail /> rakesh@gmail.com
                  </p>
                  <p>
                    {' '}
                    <AiTwotonePhone />
                    555-555-5555
                  </p>
                </Card.Text>
                <Button className="edit-contact" type="submit">
                  Edit
                </Button>{' '}
                <Button className="delete-contact" type="submit">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Addcontact;
