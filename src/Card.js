import './Card.css';

// //card as a default class always applied,
// //plus anything received from children as a className
// const Card = (props) => {
//   const item = props.item;
//   return <div className='card'>{props.children}</div>;
// }
  
// export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import  deleteBook  from './ListView'


const Card = (props) => {
  const item = props.item;

  return (
    <div className='card-container'>
    <div className= "item">
      <img src={item.image} alt={item.title} className='bookcover'/>
      <h2 className='booktitle'>{item.title}</h2>
      <h3 className ='author'>{item.author}</h3>
      {/* <div className='desc'>
        <p>{item.summary}</p>
    </div> */}
    </div>
    </div>
  );
};

export default Card;