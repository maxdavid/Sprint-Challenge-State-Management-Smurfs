import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Smurfs from './Smurfs';
import SmurfNav from './SmurfNav';
import SmurfForm from './SmurfForm';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <SmurfNav />
      <div className='MainContainer'>
        <Route exact path='/smurf-form' component={SmurfForm} />
        <Route exact path='/' component={Smurfs} />
      </div>
    </div>
  );
};

export default App;
