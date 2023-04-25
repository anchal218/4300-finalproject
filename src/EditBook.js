import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditBook(props) {

  const [books, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook({
        title: res.data.title,
        author: res.data.author,
        summary: res.data.summary,
        image: res.data.image
        });
      })
      .catch((err) => {
        console.log('Error from Edit-Book');
      });
  }, [id]);
  // axios
  // .get(`http://localhost:8082/users/${id}`)
  //   .then(res => {
  //     if (res.data.length > 0) {
  //       books.setBook({
  //         users: res.data.map(user => user.username),
  //       })
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   }), [id]);

const onChange = (e) => {
  setBook({...books, [e.target.name]: e.target.value})
}

const onSubmit = (e) => {
  e.preventDefault();

  const data = {
    title: books.title,
    author: books.author,
    summary: books.summary,
    image: books.image,
  };

  axios
  .put(`http://localhost:8082/api/books/${id}`, data)
  .then((res) => {
    navigate(`/list-view`);
  })
  .catch((err) => {
    console.log('Error in UpdateItemInfo!');
  });

  console.log(books);
}

return (
  <div className='EditBook'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 m-auto'>
          <h1 className='display-4 text-center'>Edit Book</h1>
          <p className='lead text-center'>Edit your book entry</p>

          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Title'
                name='title'
                className='form-control'
                value={books.title}
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
                value={books.author}
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
                value={books.summary}
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
                value={books.image}
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

export default EditBook;

