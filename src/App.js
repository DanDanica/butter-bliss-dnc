import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Home from "./pages"; */
import Conn from "./pages/connection";
import Gallery from "./pages/gallery";
import Hello from "./pages/hello";
import Menu from "./pages/menu";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/connection" element={<Conn />} />
      </Routes>
    </Router>
  );
}

export default App;
