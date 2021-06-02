import React, { useState } from 'react';
import { isEmail } from '../utils/Validation';
import axios from 'axios';
import { API_URL } from '../utils/Config';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const history = useHistory();

  const [alert, setAlert] = useState({
    display: false,
    msg: '',
    type: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let flagEmail = false;
    let flagPassword = false;

    if (email === '') {
      setEmailErr('Email required');
      flagEmail = true;
    } else if (!isEmail(email)) {
      setEmailErr('Email not valid');
      flagEmail = true;
    } else {
      setEmailErr(null);
      flagEmail = false;
    }

    if (password === '') {
      setPasswordErr('Enter password');
      flagPassword = true;
    } else if (password.length < 6) {
      setPasswordErr('password length should be more than 8');
      flagPassword = true;
    } else {
      setPasswordErr(null);
      flagPassword = false;
    }

    if (flagEmail === false && flagPassword === false) {
      const payload = {
        email,
        password,
      };
      try {
        const res = await axios.post(`${API_URL}/api/v1/auth`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
        } else {
          localStorage.removeItem('token');
        }

        // Redirect & reset
        history.push('/');

        setEmail('');
        setPassword('');
      } catch (error) {
        if (!error.response.data.success) {
          setAlert({ display: true, msg: 'User not Exist', type: 'danger' });
          setEmail('');
          setPassword('');
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row w-100 d-flex justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
          {alert.display && <Alert type={alert.type} msg={alert.msg} />}
          <div className="form-heading mb-4 text-center">
            <h1>
              Account <span className="heading-default-primary">Login</span>
            </h1>
          </div>
          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  value={email}
                  className={`form-control input ${
                    emailErr !== null ? 'is-invalid' : ''
                  }`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                  {emailErr !== null && emailErr}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={password}
                  className={`form-control input ${
                    passwordErr !== null ? 'is-invalid' : ''
                  }`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="invalid-feedback">
                  {passwordErr !== null && passwordErr}
                </div>
              </div>

              <button type="submit" className=" submit btn btn-primary">
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
