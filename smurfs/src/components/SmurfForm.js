import React, { useState, useEffect } from 'react';
import { addSmurf } from '../actions';
import { useStateValue } from '../hooks';

const SmurfForm = () => {
  const [input, setInput] = useState({
    id: 0,
    name: '',
    age: '',
    height: ''
  });

  const [{ smurfs, activeSmurf }, dispatch] = useStateValue();

  useEffect(() => {
    if (activeSmurf) setInput(activeSmurf);
  }, [activeSmurf]);

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInput({ id: Date.now() });
    addSmurf(input, dispatch);
    setInput({
      id: 0,
      name: '',
      age: '',
      height: ''
    });
  };

  return (
    <div className='SmurfForm'>
      <form className='InputForm' onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder='name'
          value={input.name}
          name='name'
        />
        <input
          onChange={handleInputChange}
          placeholder='age'
          value={input.age}
          name='age'
        />
        <input
          onChange={handleInputChange}
          placeholder='height'
          value={input.height}
          name='height'
        />
        <button type='submit'>Add to the village</button>
      </form>
    </div>
  );
};

export default SmurfForm;
