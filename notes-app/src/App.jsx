import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.jsx';
import Notes from './Components/notes.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Reset from './Components/Reset.jsx';  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState(" default");
useEffect(() => {
    // 1. Correct the port to 8080 and the  endpoint to /home
    fetch("http://localhost:8080/home")
      .then(res => {
        if (!res.ok) {
          throw new Error(`Server responded with status: ${res.status}`);
        }
        return res.text();
      })
      .then(text => setTitle(text))
      .catch(err => console.error("Fetch error: ", err));
  }, []); 

  return (
    <Router>
      <div className="main">
        {/* Header stays on all pages */}
        <Header />

        {/* Content area changes  based on route */}
        <div className="content">
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={
                isLoggedIn ? <Navigate to="/notes" /> : <Navigate to="/login" />
              }
            />

            {/* Login route */}
            <Route
              path="/login"
              element={<Login onLogin={() => setIsLoggedIn(true)} />}
            />

            {/* Register route */}
            <Route path="/register" element={<Register />} />

            {/* Reset password route */}
            <Route path="/reset" element={<Reset />} />

            {/* Notes route (protected) */}
            <Route
              path="/notes"
              element={
                isLoggedIn ? <Notes /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
   
  );
}


export default App;
