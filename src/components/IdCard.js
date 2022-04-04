import React from 'react';

export function IdCard({
  firstName,
  lastName,
  gender,
  height,
  birth,
  picture,
}) {
  console.log(birth.toDateString());
  const birthDate = birth.toDateString();
  return (
    <div className="inner-container">
      <div className="info">
        <h3>firstName: {firstName}</h3>
        <h3>lastName: {lastName}</h3>
        <h3>gender: {gender}</h3>
        <h3>height: {height}</h3>
      </div>
      <h3>birth: {birthDate}</h3>
      <div className="pic-container">
        <h3>picture: {picture}</h3>
      </div>
    </div>
  );
}
