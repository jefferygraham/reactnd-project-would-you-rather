import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { formatQuestion } from '../utils/helpers';

class PollResults extends Component {
  render() {
    const { question, users, authedUser, id } = this.props;
    if (question === null) {
      return <p>Question does not exist</p>;
    }
    const { name, avatar, optionOne, optionTwo } = question;
    if (question) {
      const optionOneVotes = question.optionOne.votes.length;
      const optionTwoVotes = question.optionTwo.votes.length;
      const totalVotes = optionOneVotes + optionTwoVotes;
      const optionOnePercentage = (optionOneVotes / totalVotes) * 100;
      const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100;
      return (
        <Container>
          <Row className='my-4 d-flex justify-content-center'>
            <Card className='shadow'>
              <Card.Header>{name} asks:</Card.Header>
              <Card.Body className='d-flex'>
                <img
                  className='avatar align-self-center border'
                  src={avatar}
                  alt={`Avatar of ${name}`}
                />
                <div className='ml-5 d-flex flex-column justify-content-center'>
                  <h3>Results:</h3>
                  <div>
                    <p>
                      {optionOne.text}{' '}
                      {users[authedUser].answers[id] === 'optionOne' ? (
                        <FontAwesomeIcon icon={faCheckCircle} />
                      ) : null}
                    </p>
                    <ProgressBar
                      now={optionOnePercentage}
                      label={`${optionOnePercentage.toFixed(2)}%`}
                    />
                    <p>
                      {optionOneVotes} out of {optionOneVotes + optionTwoVotes}{' '}
                      votes
                    </p>
                  </div>
                  <div>
                    <p>
                      {optionTwo.text}{' '}
                      {users[authedUser].answers[id] === 'optionTwo' ? (
                        <FontAwesomeIcon icon={faCheckCircle} />
                      ) : null}
                    </p>
                    <ProgressBar
                      now={optionTwoPercentage}
                      label={`${optionTwoPercentage.toFixed(2)}%`}
                    />
                    <p>
                      {optionTwoVotes} out of {optionOneVotes + optionTwoVotes}{' '}
                      votes
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      );
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
    users,
    id,
  };
}

export default connect(mapStateToProps)(PollResults);
