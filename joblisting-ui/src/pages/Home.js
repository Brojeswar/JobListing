import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaWpexplorer } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-div">
      <div className="home-header">
        <h1>Job Listing Web App</h1>
        <p>
          <FaWpexplorer /> Explore Jobs
        </p>
        <Link to="/login">
          <button>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
