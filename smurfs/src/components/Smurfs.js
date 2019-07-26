import React, { Component } from 'react';

import Smurf from './Smurf';
import './App.scss';
import { connect } from 'react-redux';
import { deleteSmurf, editSmurf } from '../actions';

class Smurfs extends Component {
  render() {
    return (
      <div className='Smurfs'>
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              onClick={() => deleteSmurf(smurf.id)}
            />
          );
        })}
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { editSmurf, deleteSmurf }
)(Smurfs);
