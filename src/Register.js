import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
  return (
    <div className="form ">
      <h1 className="form-heading text-center">
        Account
        <span className="account-heading text-center"> Register</span>
      </h1>
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control className="input-box mb-3" Type="name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control className="input-box mb-3" type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className=" input-box mb-3" type="password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control className="input-box mb-3" type="password" />
            </Form.Group>

            <Button className="submit" variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
