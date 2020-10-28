import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  };

  handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome) {
      return <Redirect to='/' />;
    }

    return (
      <Container className='d-flex justify-content-center'>
        <Row className='my-4'>
          <Col>
            <Card className='shadow'>
              <Card.Header className='text-center'>
                Create New Question
              </Card.Header>
              <Card.Body>
                <p>Complete the question:</p>
                <h4>Would you rather...</h4>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Control
                      type='text'
                      name='optionOneText'
                      placeholder='Enter Option 1 Here'
                      value={optionOneText}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <p>OR</p>
                  <Form.Group>
                    <Form.Control
                      type='text'
                      name='optionTwoText'
                      placeholder='Enter Option 2 Here'
                      value={optionTwoText}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button
                    block
                    type='submit'
                    disabled={optionOneText === '' || optionTwoText === ''}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect()(NewQuestion);
