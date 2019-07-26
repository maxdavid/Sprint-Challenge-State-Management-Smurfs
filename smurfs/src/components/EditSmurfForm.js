import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editSmurf, deleteSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {}
    };
  }

  handleInputChange = e => {
    let value = e.target.value;
    if (value && e.target.name === 'age') value = parseInt(value, 10);

    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editSmurf(this.state.smurf);
    this.setState({
      smurf: {}
    });
  };

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.props.smurf.id);
    alert(`${this.props.smurf.name} Baleeted`);
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form className='InputForm' onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.props.smurf.name}
            name='name'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.props.smurf.age}
            name='age'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.props.smurf.height}
            name='height'
          />
          <button type='submit'>Add to the village</button>
        </form>
        <button type='delete-button'>Delete Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingSmurf: state.editingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { editSmurf, deleteSmurf }
)(SmurfForm);
