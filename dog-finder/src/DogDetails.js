import React from 'react';
import { useParams, Link, Redirect  } from 'react-router-dom';
import "./DogDetails.css";


function DogDetails({dogs}) {
  const {name} = useParams();
  
  if (name) {
    const dog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    if (!dog) return <Redirect to="/dogs"/>

    return (
        <div className="DogDetails">
          <div className="col d-flex flex-column align-items-center">
            <img src={dog.src} alt={dog.name} />
            <h2>{dog.name}</h2>
            <h3>{dog.age} years old</h3>
            <ul>
              {dog.facts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
          </div>
        </div>
      );
  }
  
  return null;
}

export default DogDetails;