import React from "react";
import { Link } from "react-router-dom";
import "./styles/ColorList.css";

function ColorList({colors}) {
  const clrLink = Object.keys(colors).map(cName => (
    <li key={cName}>
      <Link to={`/colors/${cName}`}>{cName}</Link>
    </li>
  ));

  return (
      <div className="ColorList">
        <header>
          <h1> Welcome to the color factory</h1>
          <h1>
            <Link to='/colors/new'>Add a Color</Link>
          </h1>
        </header>
        <div className="ColorList-List">
          <p>Please add a color</p>
          <ul>{clrLink}</ul>
        </div>
      </div>
  )
}

export default ColorList;