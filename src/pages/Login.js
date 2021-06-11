import React, { useState, useEffect } from 'react';
import Validate from '../utils/Validate';
import Spinner from '../components/spinner/Spinner';
import Alert from '../components/Alert';
import { loginUser } from '../redux/auth/authActions';
import { setAlert, resetAlert } from '../redux/alert/alertActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const login = useSelector((state) => state.loginUser);

  // Destructure login the state saved in store by reducer
  const { loading, error } = login;

  useEffect(() => {
    if (error) {
      dispatch(setAlert(error));
    } else {
      dispatch(resetAlert());
    }
    return () => {
      setEmail('');
      setPassword('');
    };
  }, [dispatch, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resErrors = Validate({ email, password });
    setErrors(resErrors);

    // Call to Action
    if (resErrors.count === 0) {
      dispatch(
        loginUser({
          email,
          password,
        })
      );
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="row justify-content-center ">
      <div className="form col-md-5 ">
        {error && <Alert />}
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
