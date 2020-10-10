import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom';

class Question extends Component {
  render() {
    const question = this.props.question;
    if (question === null) {
      return <p>Question does not exist</p>;
    }
    const { name, avatar, optionOne, id } = question;
    return (
      <Fragment>
        <header>{name} wants to know would you rather:</header>
        <div className='question-info'>
          <img className='avatar' src={avatar} alt={`Avater of ${name}`} />
          <div className='question-options'>
            <p>{optionOne.text} or .....</p>
            <Link to={`/question/${id}`} className='question'>
              View Poll
            </Link>
          </div>
        </div>
      </Fragment>
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
