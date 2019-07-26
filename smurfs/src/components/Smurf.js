import React from 'react';
import './App.scss';

const Smurf = props => {
  return (
    <div className='SmurfContainer'>
      <h3 className='SmurfName'>{props.name}</h3>
      <ul className='SmurfInfo'>
        <li>{props.height} tall</li>
        <li>{props.age} smurf years old</li>
      </ul>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
