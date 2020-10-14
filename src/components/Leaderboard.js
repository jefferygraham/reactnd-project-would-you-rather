import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    const { users, userInfo } = this.props;
    return (
      <Container>
        {userInfo
          .sort((a, b) => b.totalScore - a.totalScore)
          .map((user) => (
            <Row
              key={user.user}
              className='d-flex justify-content-center text-center mt-3'
            >
              <Card className='shadow'>
                <Card.Body className='d-flex align-items-center justify-content-between'>
                  <img
                    className='avatar border'
                    src={users[user.user].avatarURL}
                    alt={`Avatar of ${users[user.user].name}`}
                  />
                  <div className='d-flex flex-column'>
                    <h2>{users[user.user].name}</h2>
                    <p>Answered questions: {user.answers}</p>
                    <p>Created questions: {user.questions}</p>
                  </div>
                  <div>
                    <h3>Score</h3>
                    <p>{user.totalScore}</p>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          ))}
      </Container>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const userInfo = Object.keys(users).map((user) => ({
    user: user,
    answers: Object.keys(users[user].answers).length,
    questions: users[user].questions.length,
    totalScore:
      Object.keys(users[user].answers).length + users[user].questions.length,
  }));

  return {
    authedUser,
    users,
    userInfo,
  };
}

export default connect(mapStateToProps)(Leaderboard);
