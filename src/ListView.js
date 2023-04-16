import React from 'react';
import Users from './Users.js'
import './ListView.css';

function ListView () {
    const BOOKS = [
        {
          name: 'It Ends With Us',
          cover:'it_ends_with_us.png',
          delete: 'trashcan.png'
        }
       ];
       
      return (
        <div className = "list">
            <div className = "header">
            <img src = 'hmbger.png' alt="menu" className = "hmbger"/>
            <h2>Your List</h2>
            <h4 className="logout">Log Out</h4>
            </div>
          <Users user_list={BOOKS} />
        </div>
      );
}
// import { AddButton } from './components/AddButton.js';
// import { BookComp } from './components/BookComp.js'; 

// const [components, setComponents] = useState(["Sample Component"]); 

// function addComponent() { 
//     setComponents([...components, "Sample Component"]) 
// } 

// <AddButton onClick={addComponent} image = "checkmark.png"/> 
// {components.map((item, i) => ( <BookComp text={item} /> ))}

export default ListView;