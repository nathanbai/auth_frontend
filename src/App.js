import logo from './logo.svg';
import { Container, Col, Row } from "react-bootstrap";
import { Routes ,Route } from 'react-router-dom'

import Login from "./Login";
import Register from './Register';
import About from './About';

import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <section id="navigation">
            <a href="Login">Login</a>
            <a href="Register">Register</a>
            
          </section>
        </Col>
      </Row>

      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Container>
      
  );
}

export default App;
