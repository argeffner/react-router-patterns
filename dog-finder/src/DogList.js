import React from 'react';
import "./DogList.css";
import Dog from './Dog';

function DogList({dogs}) {
const doggy = dogs.map(dog => (
  <Dog name={dog.name} src={dog.src} />
))
 return (
   <div className='DogList'>
     <h1>
      Click on the Dog's name to get more details
     </h1>
     <div>
     {doggy}
     </div>
   </div>
 )
}

export default DogList;