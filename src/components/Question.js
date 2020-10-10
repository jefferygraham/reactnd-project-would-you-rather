import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <Card className='my-3'>
          <Card.Header>{name} wants to know would you rather</Card.Header>
          <Card.Body className='d-flex'>
            <img className='avatar' src={avatar} alt={`Avater of ${name}`} />
            <div className='question-options'>
              <p>{optionOne.text} or .....</p>
              <Link to={`/question/${id}`} className='question'>
                View Poll
              </Link>
            </div>
          </Card.Body>
        </Card>
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
