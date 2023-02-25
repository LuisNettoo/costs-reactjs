import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./components/Home";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Newproject from "./components/Newproject";

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">Empresa</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<Newproject />} />
      </Routes>
    </Router>
  );
};

export default App;
