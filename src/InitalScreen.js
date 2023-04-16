import React, { useState } from "react";
import './InitalScreen.css'

function InitalScreen() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
    setIsLoggedIn(true);
    };

    const handleLogout = () => {
    setIsLoggedIn(false);
    };

const handleSignup = () => {
  // signup stuff here
};
    return (
    <div className = "initalScreen">
        {isLoggedIn ? (
        <div>
            <h1 className="title">BookFinds</h1>
            <form>
                <label>
                <input type="text" className = "username" placeholder=" Username" required/>
                <br></br>
                <input type="text" className = "password" placeholder=" Password" required/>
                </label>
            </form>
            <button className = "options" onClick={handleLogout}><b>Sign Up</b></button>
            <br></br>
            <button className = "options" onClick={handleLogout}><b>Forgot Username</b></button>
            <br></br>
            <button className = "options" onClick={handleLogout}><b>Forgot Password</b></button>
        </div>
        ) : (
            <div>
            <h1 className="title">BookFinds</h1>
            <img src= "bookfindslogo.png" alt="bookfindslogo" className="logo" /> 
            <br></br>
            {/* <SignInButton text = "Sign In"></SignInButton> */}
            <button onClick={handleLogin} className='logIn'>Login</button>
            {/* <button onClick={handleSignup}>Signup</button> */}
            </div>
        )}
    </div>
    )
}
export default InitalScreen;