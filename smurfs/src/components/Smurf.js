import React from 'react';
import './App.scss';

import { useStateValue } from '../hooks';
import { deleteSmurf, editSmurf } from '../actions';

const Smurf = props => {
  const [{ smurfs }, dispatch] = useStateValue();
  return (
    <div className='SmurfContainer'>
      <h3 className='SmurfName'>{props.name}</h3>
      <ul className='SmurfInfo'>
        <li>{props.height} tall</li>
        <li>{props.age} smurf years old</li>
        {/* <li onClick={() => editSmurf({ ...props }, dispatch)}>Edit</li> */}
        <li
          style={{ color: 'red', fontSize: 8, cursor: 'pointer' }}
          onClick={() => deleteSmurf(props.id, dispatch)}
        >
          Delete
        </li>
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
