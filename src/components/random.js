import React from 'react';

function Random({ min, max }) {
  const RandomNumber = Math.floor(Math.random() * (max - min));
  
  return (
    <div>
      <div>random</div>
      <h1>RAndom number is between : {min} and {max} is {RandomNumber}  </h1>
      
    </div>
  );
}
export default Random;
