import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <Navigation />
        <p>To jest strona główna.</p>
      </div>
    </div>
  );
};
export default Home;
