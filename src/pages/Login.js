import React, { useState } from 'react';
import { isEmail } from '../utils/validation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setEmailErr('enter email id');
    } else if (!isEmail(email)) {
      setEmailErr('Email not valid');
    } else {
      setEmailErr('null');
    }

    if (password === '') {
      setPasswordErr('enter password');
    } else if (password.length < 8) {
      setPasswordErr('password length should be more than 8');
    } else {
      setPasswordErr(null);
    }
  };

  return (
    <div className="container">
      <div className="row w-100 d-flex justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
          <div className="form-heading mb-4 text-center">
            <h1>
              Account <span className="heading-default-primary">Login</span>
            </h1>
          </div>
          <div class="form-section">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  value={email}
                  class={`form-control input ${
                    emailErr !== null ? 'is-invalid' : ''
                  }`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div class="invalid-feedback">
                  {emailErr !== null && emailErr}
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  class={`form-control input ${
                    passwordErr !== null ? 'is-invalid' : ''
                  }`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div class="invalid-feedback">
                  {passwordErr !== null && passwordErr}
                </div>
              </div>

              <button type="submit" class=" submit btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
