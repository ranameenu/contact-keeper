import React, { useState, useEffect } from 'react';
import Validate from '../utils/Validate';
import axios from 'axios';
import { API_URL } from '../utils/Config';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const [alert, setAlert] = useState({
    display: false,
    msg: '',
    type: '',
  });

  useEffect(() => {
    return () => {
      setEmail('');
      setPassword('');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resErrors = Validate({ email, password });
    setErrors(resErrors);
    console.log(resErrors);

    if (resErrors.count === 0) {
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
    <div className="row w-100 d-flex justify-content-center main-col ">
      <div className="form col-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5 ">
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
                  errors.email ? 'is-invalid' : ''
                }`}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="invalid-feedback">
                {errors.email && errors.email}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                className={`form-control input ${
                  errors.password ? 'is-invalid' : ''
                }`}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="invalid-feedback">
                {errors.password && errors.password}
              </div>
            </div>

            <button type="submit" className=" submit btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
