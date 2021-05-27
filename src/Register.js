import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(this.state));
    this.setState({
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
    });
  };

  return (
    <div className="form ">
      <h1 className="form-heading text-center">
        Account
        <span className="account-heading text-center"> Register</span>
      </h1>
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="input-box mb-3"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => {
                  var x = /@ ./;

                  if (email.match(x)) {
                    alert('enter valid email id should contain @domain.com');
                  } else {
                    setEmail(e.target.value);
                  }
                }}
                className="input-box mb-3"
                name="email"
                required
              />
              <p>* email should be contain @domain.com</p>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className=" input-box mb-3"
                name="password"
                required
              />
              <p>
                * password should contain at least 8 character and values with
                capital, small & special character included
              </p>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                value={confirmpassword}
                onChange={(e) => {
                  if (confirmpassword !== password) {
                    alert('123');
                  } else {
                    setConfirmPassword(e.target.value);
                  }
                }}
                className="input-box mb-3"
                name="confirmpassword"
                required
              />
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
