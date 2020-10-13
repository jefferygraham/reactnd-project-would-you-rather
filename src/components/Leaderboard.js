import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    const { authedUser, questions, users, userIdList } = this.props;
    return (
      <Container>
        {userIdList.map((user) => (
          <Row
            key={user}
            className='d-flex justify-content-center text-center mt-3'
          >
            <Card>
              <Card.Body className='d-flex'>
                <img
                  className='avatar'
                  src={users[user].avatarURL}
                  alt={`Avatar of ${users[user].name}`}
                />
                <div className='d-flex flex-column'>
                  <h2>{users[user].name}</h2>
                  <p>Answered questions</p>
                  <p>Created questions</p>
                </div>
                <div>
                  <h2>Score</h2>
                  <p>#</p>
                </div>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Container>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
    userIdList: Object.keys(users),
    questionIdList: Object.keys(questions),
  };
}

export default connect(mapStateToProps)(Leaderboard);
