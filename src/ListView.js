import React, {useState} from 'react';
import Users from './Users.js'
import './ListView.css';
import Card from './Card';
import UserItem from './UserItem';

function ListView () {
    const BOOKS = [
        {
          id: 'b1',  
          name: 'It Ends With Us',
          cover:'it_ends_with_us.png',
          delete: 'trashcan.png'
        }
       ];

    const [books, setBooks] = useState(BOOKS)

    function delBook(id) {
        const newList = books.filter((item) => item.id !== id);
        setBooks(newList);
    }

      return (
        <div className = "list">
            <div className = "header">
            <img src = 'hmbger.png' alt="menu" className = "hmbger"/>
            <h2>Your List</h2>
            <h4 className="logout">Log Out</h4>
            </div>
            {books.map((book) => (
              <Card className="users" key = {book.id}>
                <div className= "item">
                <img src={book.cover} alt={book.name} className='bookcover' />
                <h2 className='booktitle'>{book.name}</h2>
                <button className = "deleteBtn" onClick = {() => delBook(book.id)}>
                    <img src={book.delete} alt="delete" className='delete' />
                </button>
                </div>
              </Card>
            ))}
        </div>
      );
}
{/* import { AddButton } from './components/AddButton.js';
import { BookComp } from './components/BookComp.js'; 

const [components, setComponents] = useState(["Sample Component"]); 

function addComponent() { 
    setComponents([...components, "Sample Component"]) 
} 

<AddButton onClick={addComponent} image = "checkmark.png"/> 
{components.map((item, i) => ( <BookComp text={item} /> ))} */}

export default ListView;