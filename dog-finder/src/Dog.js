import React from 'react';
import { Link } from "react-router-dom";


function Dog(dog){

    return (
        <div key={dog.name} style={{marginBottom: '55px'}}>
        <h2 style={{textAlign: "center",  position: 'relative', top: '15px'}}>
          <Link to={`/dogs/${dog.name.toLowerCase()}`}
                style={{textDecoration: 'none', color: 'blue'}}>
                  {dog.name}
          </Link>
        </h2>
        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
          <img src={dog.src} alt={dog.name}/>
        </Link>
       </div>
    )
}

export default Dog;