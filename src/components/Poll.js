import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { formatQuestion } from '../utils/helpers';
import { handleSaveQuestionAnswer } from '../actions/questions';

class Poll extends Component {
  state = {
    choice: '',
  };

  handleSubmit = (evt) => {
    const { authedUser, id } = this.props;
    const answer = this.state.choice;
    evt.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleSaveQuestionAnswer(authedUser, id, answer));
  };

  handleChange = (evt) => {
    const choice = evt.target.value;
    this.setState(() => ({
      choice,
    }));
  };

  render() {
    const { question } = this.props;
    if (question === null) {
      return <p>Question does not exist</p>;
    }
    const { name, avatar, optionOne, optionTwo } = question;
    if (question) {
      return (
        <Container>
          <Row className='my-3 d-flex justify-content-center'>
            <Card className='shadow'>
              <Card.Header>{question.name} asks...</Card.Header>
              <Card.Body className='d-flex'>
                <img
                  className='avatar border align-self-center'
                  src={avatar}
                  alt={`Avater of ${name}`}
                />
                <Form onSubmit={this.handleSubmit} className='ml-5'>
                  <Form.Group>
                    <Form.Label>Would You Rather...</Form.Label>
                    <Form.Check
                      onChange={this.handleChange}
                      type='radio'
                      label={optionOne.text}
                      name='pollChoice'
                      id='optionOne'
                      value='optionOne'
                    />
                    <Form.Check
                      onChange={this.handleChange}
                      type='radio'
                      label={optionTwo.text}
                      name='pollChoice'
                      id='optionTwo'
                      value='optionTwo'
                    />
                  </Form.Group>
                  <Button type='submit' block>
                    Submit
                  </Button>
                </Form>
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

export default connect(mapStateToProps)(Poll);
