import React, { Component } from 'react';

class NewQuestion extends Component {
  state = {
    option1: '',
    option2: '',
  };

  handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { option1, option2 } = this.state;

    console.log('Question: ', option1, option2);

    this.setState(() => ({
      text: '',
    }));
  };

  render() {
    const { option1, option2 } = this.state;
    return (
      <div>
        <h3>Create New Question</h3>
        <p>Complete the question:</p>
        <h4>Would you rather...</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name='option1'
            placeholder='Enter Option 1 Here'
            value={option1}
            onChange={this.handleChange}
          />
          <p>OR</p>
          <input
            name='option2'
            placeholder='Enter Option 2 Here'
            value={option2}
            onChange={this.handleChange}
          />
          <button type='submit' disabled={option1 === '' || option2 === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewQuestion;
