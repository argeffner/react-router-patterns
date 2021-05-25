import React from "react";
import { Link } from "react-router-dom";
import "./styles/Color.css";

function Color({color, hex, history}) {
    if (!hex) {
      history.push('/colors');
    }
  
    return (
      <div className="Color" style={{ backgroundColor: hex }}>
        <p className="main">this is {color}</p>
        <p>
          <Link to="/">Go to Main Menu</Link>
        </p>
      </div>
    );
  }
  
  export default Color;