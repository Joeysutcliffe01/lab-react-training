import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
      <div>
      {console.log(lastName)}
      <h3>lastName: {lastName}</h3>
      <h3>firstName: {firstName}</h3>
      <h3>gender: {gender}</h3>
      <h3>height: {height}</h3>
      {/* <h3>birth: {birth}</h3> */}
      <h3>picture: {picture}</h3>
  </div>;
  )
}

export default IdCard;
