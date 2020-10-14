import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Login extends Component {
  state = {
    chosenUser: null,
  };

  handleChange = (evt) => {
    const authedUser = evt.target.value;
    this.setState(() => ({
      chosenUser: authedUser,
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { dispatch } = this.props;

    dispatch(setAuthedUser(this.state.chosenUser));
  };

  render() {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='my-4'>
          <Card className='text-center shadow' style={{ width: '36rem' }}>
            <Card.Header>
              <h3>Welcome to the Would You Rather App!</h3>
              <p>Please sign in to continue.</p>
            </Card.Header>
            <Card.Img variant='top' src='/assets/images/would-you-rather.jpg' />
            <Card.Body>
              <Card.Title>Sign In</Card.Title>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Control
                    as='select'
                    onChange={this.handleChange}
                    name='users'
                    id='users'
                    form='userform'
                  >
                    <option>SELECT A USER</option>
                    {Object.keys(this.props.users).map((user) => (
                      <option value={this.props.users[user].id} key={user}>
                        {this.props.users[user].name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button type='submit' block>
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
