import React, { useState } from 'react';
import { isEmail } from '../utils/validation';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCconfirmPassword] = useState('');
  const [nameErr, setNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setNameErr('Enter your name');
    } else {
      setNameErr(null);
    }

    if (email === '') {
      setEmailErr('Enter your email');
    } else if (!isEmail(email)) {
      setEmailErr('Please enter valid email id');
    } else {
      setEmailErr(null);
    }

    if (password === '') {
      setPasswordErr('Enter password');
    } else if (password.length <= 8) {
      setPasswordErr('Password length should exceed 8');
    } else {
      setPasswordErr(null);
    }

    if (confirmPassword === '') {
      setConfirmPasswordErr(`Confirm password can't be blank`);
    } else if (confirmPassword !== password) {
      setConfirmPasswordErr('Invalid or mismatch password');
    } else {
      setConfirmPasswordErr(null);
    }

    console.log(name, email, password);
  };
  return (
    <div className="container">
      <div className="row w-100 d-flex justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
          <div className="form-heading mb-4 text-center">
            <h1>
              Account <span className="heading-default-primary">Register</span>
            </h1>
          </div>
          <div class="form-section">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                  class={`form-control input ${
                    nameErr !== null ? 'is-invalid' : ''
                  }`}
                  value={name}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <div class="invalid-feedback">
                  {nameErr !== null && nameErr}
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  class={`form-control input ${
                    emailErr !== null ? 'is-invalid' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div class="invalid-feedback">
                  {emailErr !== null && emailErr}
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class={`form-control input ${
                    passwordErr !== null ? 'is-invalid' : ''
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div class="invalid-feedback">
                  {passwordErr !== null && passwordErr}
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  class={`form-control input ${
                    confirmPasswordErr !== null ? 'is-invalid' : ''
                  }`}
                  value={confirmPassword}
                  onChange={(e) => setCconfirmPassword(e.target.value)}
                />
                <div class="invalid-feedback">
                  {confirmPasswordErr !== null && confirmPasswordErr}
                </div>
              </div>

              <button type="submit" class="submit btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
