import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
  render() {
    const { answeredQuestionIds } = this.props;

    return (
      <div>
        <h3 className='center'>Your Questions</h3>
        <ul className='dashboard-list'>
          {answeredQuestionIds.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    answeredQuestionIds: Object.keys(questions)
      .filter(
        (id) =>
          questions[id].optionOne.votes.includes(authedUser) ||
          questions[id].optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Dashboard);
