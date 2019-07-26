import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import Smurfs from './Smurfs';
import SmurfNav from './SmurfNav';
import SmurfForm from './SmurfForm';
import { fetchSmurfs, addSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className='App'>
        <SmurfNav />
        <div className='MainContainer'>
          <Route
            exact
            path='/'
            render={props => <Smurfs smurfs={this.props.smurfs} />}
          />
          <Route
            exact
            path='/smurf-form'
            render={props => <SmurfForm addSmurf={this.props.addSmurf} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
