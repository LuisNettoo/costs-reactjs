import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Newproject from "./pages/Newproject";
import Container from "./layout/Container";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container customClass="min__heigth">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<Newproject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
