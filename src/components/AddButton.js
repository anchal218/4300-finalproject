import React from 'react'; 
import './AddButton.css'

const AddButton = (props) => { 
  
  return ( 
    <button className="addButton" onClick={props.onClick}><img src={props.image}/></button> 
  ); 
  
} 

export {AddButton};