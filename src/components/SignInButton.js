import React from 'react'; 
import './SignInButton.css'

const SignInButton = (props) => { 
  
  return ( 
    <button className="signInBtn" onClick={props.onClick}>{props.text}</button> 
  ); 
  
} 

export {SignInButton};