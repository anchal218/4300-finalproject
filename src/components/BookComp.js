import React from 'react'; 

const BookComp = (props) => { 
  return ( 
    <div className="Component"> 
      <h1>{props.text}</h1> 
    </div> 
  ); 
  
}; 

export {BookComp};