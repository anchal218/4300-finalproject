import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateUser = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: ''
  });

  const onChangeUsername = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:8082/users', user)
    .then((res) => {
      setUser({
        username: ''
      });

      // Push to /
      navigate('/');
    })
    .catch((err) => {
      console.log('Error in CreateItem!');
    });
    console.log(user);

    axios.post('http://localhost:8082/users/add', user)
      .then(res => console.log(res.data));

  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={user.username}
              onChange={onChangeUsername}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser;