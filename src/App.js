// import './App.css';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import React, { useState } from "react";
// import ErrorPage from './ErrorPage';
// import InitalScreen from './InitalScreen';
//import ListView from './ListView';
// import BookDetails from './BookDetails';
// import Navbar from './Navbar';
// import Navbar1 from './components/Navbar1';
// import booklist from './components/create-exercises.component';
// import "bootstrap/dist/css/bootstrap.min.css"


// function App() {
//   return (
//     <div className = "App">
//       <div className = "App-header">
//         <Router>
//         ` <Navbar1 />
//             <Routes>
//               <Route path='/list' element={<booklist />} />
//               {/* <Route exact path='/' element={<InitalScreen />} /> */}
//               {/* <Route path='/ListView' element={<ListView />} />
//               <Route path='/BookDetails' element={<BookDetails />} />
//               <Route path='/Navbar' element={<Navbar />} /> */}
//               <Route path= "*" element={<ErrorPage />} />
//             </Routes>
//         </Router>
//       </div>

//     </div>
//   );
// }

// export default App;

import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar1 from "./components/Navbar1.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateItem from './components/CreateItem';
import ShowItemList from './components/ShowItemList';
import ShowItemDetails from './components/ShowItemDetails';
import UpdateItemInfo from './components/UpdateItemInfo';
import ErrorPage from './ErrorPage';
import InitalScreen from './InitalScreen';
import ListView from './ListView';
import CreateBook from './CreateBook';
// import BookDetails from './BookDetails';
import Navbar from './Navbar';
// import Navbar1 from './components/Navbar1';
// import booklist from './components/create-exercises.component';
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="container">
    <Router>
    <Navbar1 />
      <Routes>
      <Route path="/" element={<InitalScreen />} />
      <Route path="/list-view" element={<ListView />} />
      <Route path="/navbar" element={<Navbar />} />
      {/* <Route path="/" element={<ExercisesList />} />
      <Route path="/edit/:id" element={<EditExercise />} />
      <Route path="/create" element={<CreateExercise />} /> */}
      <Route path="/users" element={<CreateUser/>} />
      {/* <Route exact path='/' element={<ShowItemList />} /> */}
      <Route path='/create-book' element={<CreateBook />} />
      {/* <Route path='/edit-item/:id' element={<UpdateItemInfo />} />
      <Route path='/show-item/' element={<ShowItemDetails />} />
      <Route path='/show-item-list/' element={<ShowItemList />} /> */}
      <Route path= "*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

