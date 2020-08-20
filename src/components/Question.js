import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
  render() {
    console.log(this.props);
    const question = this.props.question;
    if (question === null) {
      return <p>Question does not exist</p>;
    }
    const { name, avatar, optionOne, optionTwo } = question;
    return (
      <div className="question">
        <img className="avatar" src={avatar} alt={`Avater of ${name}`} />
        <div className="question-info">
          <p>{name} asked:</p>
          <p>Would You Rather...</p>
          <input type="radio" id="option1" name="option" value="option1" />
          <label for="option1">{optionOne.text}</label>
          <input type="radio" id="option2" name="option" value="option2" />
          <label for="option2">{optionTwo.text}</label>
          <button>Submit</button>
        </div>
      </div>
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
