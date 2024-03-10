import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Login from './Login';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="container-lg">
      <Header />
      <Login />
    </Container>
  )
};

export default App;
