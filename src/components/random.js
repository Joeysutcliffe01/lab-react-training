import React from 'react';

function Random({ min, max }) {
  const RandomNumber = Math.floor(Math.random() * (max - min));

  return (
    <div>
      <h2>random</h2>
      <h3>
        RAndom number is between : {min} and {max} is {RandomNumber}{' '}
      </h3>
    </div>
  );
}
export default Random;
