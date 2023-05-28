import * as React from "react";
import { FaBars, FaHome, FaSignOutAlt } from "react-icons/fa";
import Navlink from "./Navlink";

const Navbar = (props) => {
  const expandNavbar = () => {
    var ele = document.getElementById("navbar");
    if (ele.className === "navbar-div") {
      ele.className += " responsive";
    } else {
      ele.className = "navbar-div";
    }
  };

  return (
    <div className="navbar-div" id="navbar">
      <ul>
        <li className="nav-home">
          <Navlink icon={<FaHome />} name="&nbsp;Home" path="/" />
        </li>
        {props.user === "employer" && (
          <>
            <li
              className={`nav-employer-feed nav-lg ${
                props.page === "feed" ? "nav-active" : ""
              }`}
            >
              <Navlink name="View Job Posts" path="/employer/feed" />
            </li>
            <li
              className={`nav-employer-create nav-lg ${
                props.page === "create" ? "nav-active" : ""
              }`}
            >
              <Navlink name="Create Job Posts" path="/employer/create" />
            </li>
            <li className="nav-logout nav-lg">
              <Navlink
                icon={<FaSignOutAlt />}
                name="&nbsp;Logout"
                path="/login"
              />
            </li>
            <li className="nav-icon">
              <button onClick={expandNavbar}>
                <FaBars />
              </button>
            </li>
          </>
        )}
        {props.user === "employee" && (
          <>
            <li
              className={`nav-employer-feed nav-lg ${
                props.page === "feed" ? "nav-active" : ""
              }`}
            >
              <Navlink name="View Job Posts" path="/employee/feed" />
            </li>
            <li className="nav-logout nav-lg">
              <Navlink
                icon={<FaSignOutAlt />}
                name="&nbsp;Logout"
                path="/login"
              />
            </li>
            <li className="nav-icon">
              <button onClick={expandNavbar}>
                <FaBars />
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
