import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = e => {
    let value = e.target.value;
    if (value && e.target.name === 'age') value = parseInt(value, 10);

    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ id: Date.now() });
    this.props.addSmurf(this.state);
    this.setState({
      id: 0,
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form className='InputForm' onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height'
          />
          <button type='submit'>Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
