import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom';

class Question extends Component {
  render() {
    const question = this.props.question;
    if (question === null) {
      return <p>Question does not exist</p>;
    }
    const { name, avatar, optionOne, optionTwo, id } = question;
    return (
      <Link to={`/question/${id}`} className='question'>
        <header>{name} wants to know would you rather:</header>
        <div className='question-info'>
          <img className='avatar' src={avatar} alt={`Avater of ${name}`} />
          <div className='question-options'>
            <div>
              <input
                type='radio'
                id={`optionOne-${question.id}`}
                name='option'
                value={`optionOne-${question.id}`}
              />
              <label htmlFor={`optionOne-${question.id}`}>
                {optionOne.text}
              </label>
            </div>
            <div>
              <input
                type='radio'
                id={`optionTwo-${question.id}`}
                name='option'
                value={`optionTwo-${question.id}`}
              />
              <label htmlFor={`optionTwo-${question.id}`}>
                {optionTwo.text}
              </label>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </Link>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(Question);
