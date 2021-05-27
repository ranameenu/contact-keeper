import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    var x = this.state.email.indexOf('@');

    if (
      this.state.password !== this.state.confirmpassword ||
      this.state.password.length < 8 ||
      x < 1
    ) {
      alert('Enter valid details');
    } else {
      e.preventDefault();
      localStorage.setItem('user', JSON.stringify(this.state));
      this.setState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
      });
    }
  };

  // componentDidMount() {
  //   this.userData = JSON.parse(localStorage.getItem('user'));
  //   if (localStorage.getItem('user')) {
  //     this.setState({
  //       name: this.userData.name,
  //       email: this.userData.email,
  //       password: this.userData.password,
  //       confirmpassword: this.userData.confirmpassword,
  //     });
  //   } else {
  //     this.setState({
  //       name: '',
  //       email: '',
  //       password: '',
  //       confirmpassword: '',
  //     });
  //   }
  // }

  render() {
    return (
      <div className="form ">
        <h1 className="form-heading text-center">
          Account
          <span className="account-heading text-center"> Register</span>
        </h1>
        <Row className="d-flex justify-content-center">
          <Col lg={4}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.state.name}
                  name="name"
                  onChange={this.onChange}
                  className="input-box mb-3"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.onChange}
                  className="input-box mb-3"
                  name="email"
                  required
                />
                <p>(* email should be contain @domain.com)</p>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.onChange}
                  className=" input-box mb-3"
                  name="password"
                  required
                />
                <p>
                  (* password should contain at least 8 character and values)
                </p>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  value={this.state.confirmpassword}
                  onChange={this.onChange}
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
  }
}

export default Register;
