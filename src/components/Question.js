import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
  render() {
    console.log(this.props);
    return <div className="question">QUESTION</div>;
  }
}

function mapStateToProps({ authedUSer, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUSer,
    question: formatQuestion(question, users[question.author], authedUSer),
  };
}

export default connect(mapStateToProps)(Question);
