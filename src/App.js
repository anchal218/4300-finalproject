import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from "react";
import { SignInButton } from './components/SignInButton';
import ErrorPage from './ErrorPage';
import InitalScreen from './InitalScreen';
import ListView from './ListView'


function App() {
  return (
    <div className = "App">
      <div className = "App-header">
        <Router>
            <Routes>
              <Route exact path='/' element={<InitalScreen />} />
              {/* <Route path='/add' element={<CreateItem />} /> */}
              {/* <Route path='/edit-item/:id' element={<UpdateItemInfo />} /> */}
              <Route path='/ListView' element={<ListView />} />
              <Route path= "*" element={<ErrorPage />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

