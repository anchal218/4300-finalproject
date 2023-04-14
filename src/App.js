import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from "react";
import { SignInButton } from './components/SignInButton';
import ErrorPage from './ErrorPage';
import UserPage from './UserPage';
import InitalScreen from './InitalScreen';


function App() {
  return (
    <div className = "App">
      <div className = "App-header">
        <Router>
            <Routes>
              <Route exact path='/' element={<InitalScreen />} />
              <Route path='/UserPage' element={<UserPage />} />
              {/* <Route path='/add' element={<CreateItem />} />
              <Route path='/edit-item/:id' element={<UpdateItemInfo />} />
              <Route path='/show-item/:id' element={<ShowItemDetails />} /> */}
              <Route path= "*" element={<ErrorPage />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

