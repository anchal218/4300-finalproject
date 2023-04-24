import React, { useState, useEffect } from 'react';
import './ListView.css';
import Card from './Card';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ListView () {
    const { id } = useParams();
    const [books, setBooks] = useState([])
    const [item, setItem] = useState({});
    const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ListView');
      });
  }, []);


const deleteBook = (id) => {
  axios
    .delete(`http://localhost:8082/api/books/${id}`)
    .then((res) => {
      console.log(res.data)});

      setBooks(
        prevBook => prevBook.filter(el => el._id !== id)
      )
};

<p>
<a href="/create-item">+ Add New Book</a>
</p>
  
  const bookList =
  books.length === 0
    ? 'Add your first book!'
    : books.map((item, k, image) => (<div className = "card"><Card item={item} key={k}/>
        <button className = "deleteBtn" onClick = {() => deleteBook(item._id)}>
          <img src='trashcan.png' alt="delete" className='deleteBtn' />
      </button>
    </div>))

  return (
    <div className = "list">
        <div className = "header">
        {/* <img src = 'hmbger.png' alt="menu" className = "hmbger"/> */}
        <Link to='/create-book' className='addBtn'>
          + Add New Item
        </Link>
        <h2>Your List</h2>
        <h4 className="logout">Log Out</h4>
        </div>
        <div className='list'>{bookList}</div>
    </div>
  );
}

export default ListView;