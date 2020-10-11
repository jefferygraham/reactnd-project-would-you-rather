import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Question from './Question';

class Dashboard extends Component {
  render() {
    const { answeredQuestionIds, unAnsweredQuestionIds } = this.props;

    return (
      <Container className='my-3'>
        <Tabs defaultActiveKey='unanswered'>
          <Tab eventKey='unanswered' title='Unanswered Questions'>
            <ul className='dashboard-list'>
              {unAnsweredQuestionIds.map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey='answered' title='Answered Questions'>
            <ul className='dashboard-list'>
              {answeredQuestionIds.map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    answeredQuestionIds: Object.keys(questions).filter(
      (id) =>
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser)
    ),
    unAnsweredQuestionIds: Object.keys(questions)
      .filter(
        (id) =>
          !(
            questions[id].optionOne.votes.includes(authedUser) ||
            questions[id].optionTwo.votes.includes(authedUser)
          )
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Dashboard);
