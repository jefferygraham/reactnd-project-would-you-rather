import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
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

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        <h3>Create New Question</h3>
        <p>Complete the question:</p>
        <h4>Would you rather...</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name='optionOneText'
            placeholder='Enter Option 1 Here'
            value={optionOneText}
            onChange={this.handleChange}
          />
          <p>OR</p>
          <input
            name='optionTwoText'
            placeholder='Enter Option 2 Here'
            value={optionTwoText}
            onChange={this.handleChange}
          />
          <button
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
