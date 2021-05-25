import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="form ">
      <h1 className="form-heading text-center">
        Account
        <span className="account-heading text-center"> Login</span>
      </h1>
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control className="input-box mb-3" type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className=" input-box mb-3" type="password" />
            </Form.Group>

            <Button className="submit" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
