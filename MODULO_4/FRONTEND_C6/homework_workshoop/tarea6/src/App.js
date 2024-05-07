import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import WorkExperience from "./components/workexperience"
import NotFound from "./components/not_foundPage"
import './App.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/WorkExperience" element={<WorkExperience/>} />
          <Route path="/NotFound"element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
