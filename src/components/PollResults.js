import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { formatQuestion } from '../utils/helpers';

class PollResults extends Component {
  render() {
    const { question } = this.props;
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
          <Row className='my-3 d-flex justify-content-center'>
            <Card>
              <Card.Header>{name} asks:</Card.Header>
              <Card.Body className='d-flex'>
                <img
                  className='avatar'
                  src={avatar}
                  alt={`Avatar of ${name}`}
                />
                <div>
                  <h3>Results:</h3>
                  <div>
                    <p>{optionOne.text}</p>
                    <p>
                      <ProgressBar
                        now={optionOnePercentage}
                        label={`${optionOnePercentage.toFixed(2)}%`}
                      />
                      {optionOneVotes} out of {optionOneVotes + optionTwoVotes}{' '}
                      votes
                    </p>
                  </div>
                  <div>
                    <p>{optionTwo.text}</p>
                    <p>
                      <ProgressBar
                        now={optionTwoPercentage}
                        label={`${optionTwoPercentage.toFixed(2)}%`}
                      />
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
  };
}

export default connect(mapStateToProps)(PollResults);
