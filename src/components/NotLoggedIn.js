import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

class NotLoggedIn extends Component {
  render() {
    return (
      <Alert variant='danger'>
        <Alert.Heading>Error 401 - Unauthorized</Alert.Heading>
        <p>
          You must be logged in to see this page. Please{' '}
          <Link className='alert-link' exact to='/'>
            log in
          </Link>{' '}
          to continue.
        </p>
      </Alert>
    );
  }
}

export default NotLoggedIn;
