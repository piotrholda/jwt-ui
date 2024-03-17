import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Container className="container-lg">
        <Header />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </Container>
    </Router>
  )
};

export default App;
