import * as React from "react";
import { Link } from "react-router-dom";

const Navlink = (props) => {
  return (
    <Link to={props.path}>
      <button>
        {props.icon}
        {props.name}
      </button>
    </Link>
  );
};

export default Navlink;
