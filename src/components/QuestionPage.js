import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Poll from './Poll';
import PollResults from './PollResults';

class QuestionPage extends Component {
  render() {
    const { id, answered } = this.props;

    if (answered.includes(id)) {
      return (
        <Container>
          <Row className='d-flex justify-content-center'>
            <PollResults id={id} />
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row className='d-flex justify-content-center'>
            <Poll id={id} />
          </Row>
        </Container>
      );
    }
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params;

  return {
    authedUser,
    id,
    questions,
    answered: Object.keys(questions).filter(
      (id) =>
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser)
    ),
  };
}

export default connect(mapStateToProps)(QuestionPage);
