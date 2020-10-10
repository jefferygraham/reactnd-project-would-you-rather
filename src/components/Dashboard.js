import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Question from './Question';

class Dashboard extends Component {
  render() {
    const { answeredQuestionIds, unAnsweredQuestionIds } = this.props;

    return (
      <div>
        <h3 className='center'>Your Questions</h3>
        <Tabs defaultActiveKey='unanswered'>
          <Tab eventKey='unanswered' title='unanswered'>
            <ul className='dashboard-list'>
              {unAnsweredQuestionIds.map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey='answered' title='answered'>
            <ul className='dashboard-list'>
              {answeredQuestionIds.map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </div>
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
