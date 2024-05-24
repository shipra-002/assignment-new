import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CreateNote from './components/createNotes';
import GetNotes from './components/getNotes';
import UpdateNote from './components/updateNotes';
import DeleteNote from './components/deleteNotes';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>
          <Link to="/createNotes">
            Notes App
          </Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/createNotes">Create Note</Link></li>
            <li><Link to="/getNotes">Get Notes</Link></li>
            <li><Link to="/updateNotes">Update Note</Link></li>
            <li><Link to="/deleteNotes">Delete Note</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Navigate to="/createNotes" />} /> */}
            <Route path="/createNotes" element={<CreateNote />} />
            <Route path="/getNotes" element={<GetNotes />} />
            <Route path="/updateNotes" element={<UpdateNote />} />
            <Route path="/deleteNotes" element={<DeleteNote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
  <Route path="/" element={<Navigate to="/createNotes" />} />

};

export default App;

