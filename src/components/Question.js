import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class Question extends Component {
  render() {
    const question = this.props.question;
    if (question === null) {
      return <p>Question does not exist</p>;
    }
    const { name, avatar, optionOne, id } = question;
    return (
      <Card className='my-4 shadow'>
        <Card.Header className='lead'>
          {name} wants to know would you rather
        </Card.Header>
        <Card.Body className='d-flex'>
          <img
            className='avatar border'
            src={avatar}
            alt={`Avater of ${name}`}
          />
          <div className='ml-5 d-flex flex-column justify-content-center'>
            <p>{optionOne.text} or .....</p>
            <Link
              to={`/question/${id}`}
              className='btn btn-primary align-self-start'
            >
              View Poll
            </Link>
          </div>
        </Card.Body>
      </Card>
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
