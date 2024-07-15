import React from "react";
import Home from "./home";
import MyNotes from "./mynotes";
import Favorites from "./favorites";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default Pages;
