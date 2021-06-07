import React, { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { AiTwotonePhone } from 'react-icons/ai';
import axios from 'axios';
import Validate from '../utils/Validate';
import { API_URL } from '../utils/Config';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('Personal');

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    const resErrors = Validate({ name, email, phone, type });
    setErrors(resErrors);

    if (resErrors.count === 0) {
      const payload = {
        name,
        email,
        phone,
        type,
      };

      const res = await axios.post(`${API_URL}/api/v1/contacts`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(res);

      // try {
      //   const res = await axios.post(`${API_URL}/api/v1/contacts`, payload, {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   });
      // } catch (error) {
      //   console.log();
      // }
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="form col-md-5  ">
        <div className="form-heading mb-4">
          <h1>
            <span className="heading-default-primary"> Add Contact</span>
          </h1>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="invalid-feedback">{errors.name && errors.name}</div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                className="form-control input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="invalid-feedback">
              {errors.email && errors.email}
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control input bfh-phone"
                data-format="+91 (ddd) ddd-dddd"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="invalid-feedback">
                {errors.phone && errors.phone}
              </div>
            </div>
            <div className="mb-3 ">
              <p>CONTACT TYPE: </p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Personal"
                  defaultChecked
                  // checked={type === 'Personal'}
                  onClick={(e) => setType(e.target.value)}
                />
                <label className="form-check-label">Personal</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Professional"
                  // checked={type === 'Professional'}
                  onClick={(e) => setType(e.target.value)}
                />
                <label className="form-check-label">Professional</label>
              </div>
              <div className="invalid-feedback">
                {errors.type && errors.type}
              </div>
            </div>
            <button type="submit" className=" submit btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="form col-md-5 offset-md-1  ">
        <input
          className="form-control input"
          type="text"
          placeholder="Filter Contact"
        />
        <div className="contact-list-body card mt-3">
          <div className="card mb-3 ">
            <div className="card-body">
              <div className="card-title">
                Meenu <span className="badge bg-success">Professional</span>
              </div>

              <p className="contact-mail">
                <HiMail /> meenurana32@gmail.com
              </p>
              <p className="contact-number">
                <AiTwotonePhone /> 9999-999-999
              </p>
              <button type="button" className="btn btn-edit btn-sm btn-primary">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-delete btn-sm btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="card mb-3 ">
            <div className="card-body">
              <div className="card-title">
                Reena <span className="badge bg-primary">Personal</span>
              </div>

              <p className="contact-mail">
                <HiMail /> meenurana32@gmail.com
              </p>
              <p className="contact-number">
                <AiTwotonePhone /> 9999-999-999
              </p>
              <button type="button" className="btn btn-edit btn-sm btn-primary">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-delete btn-sm btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
