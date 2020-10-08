import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div>
        <label htmlFor='users'>Choose a user:</label>
        <select name='users' id='users' form='userfrom'>
          {Object.keys(this.props.users).map((user) => (
            <option key={user}>{this.props.users[user].name}</option>
          ))}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
