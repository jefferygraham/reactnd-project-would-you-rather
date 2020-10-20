import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

class NotLoggedIn extends Component {
  state = {
    chosenUser: null,
    redirectToReferrer: false,
  };

  handleChange = (evt) => {
    const authedUser = evt.target.value;
    this.setState(() => ({
      chosenUser: authedUser,
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState(() => ({
      redirectToReferrer: true,
    }));

    const { dispatch } = this.props;

    dispatch(setAuthedUser(this.state.chosenUser));
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <Row className='my-4'>
          <Col md={{ span: 6, offset: 3 }}>
            <Alert variant='danger' className='shadow'>
              <Alert.Heading>Error 401 - Unauthorized</Alert.Heading>
              <p>
                You must be logged in to see this page. Please log in to
                continue.
              </p>
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
                <Button variant='danger' type='submit' block>
                  Sign In
                </Button>
              </Form>
            </Alert>
          </Col>
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

export default connect(mapStateToProps)(NotLoggedIn);
