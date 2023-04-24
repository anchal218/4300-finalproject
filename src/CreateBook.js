import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBook = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    summary: '',
    image: '',
    published_date: '',
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/books', book)
      .then((res) => {
        setBook({
            title: '',
            author: '',
            summary: '',
            image: '',
        });

        // Push to /
        navigate('/list-view');
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });

      axios.post('http://localhost:8082/api/books/add', book)
      .then(res => console.log(res.data));
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/list-view' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Book</h1>
            <p className='lead text-center'>Create new book entry</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title'
                  name='title'
                  className='form-control'
                  value={book.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={book.author}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Summary'
                  name='summary'
                  className='form-control'
                  value={book.summary}
                  onChange={onChange}
                />
              </div>
              <br />
              {/* <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={book.published_date}
                  onChange={onChange}
                />
              </div> */}
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Book Cover (url)'
                  name='image'
                  className='form-control'
                  value={book.image}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
