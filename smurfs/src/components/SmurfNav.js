import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.scss';

export default class SmurfNav extends Component {
  render() {
    return (
      <nav className='TopBar'>
        <h1 className='Headline'>Smurf Village</h1>
        <div className='NavLinks'>
          <NavLink className='StyledLink' exact to='/'>
            Home
          </NavLink>
          <NavLink className='StyledLink' exact to='/smurf-form'>
            Add Smurf
          </NavLink>
        </div>
      </nav>
    );
  }
}
