import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    toDashboard: false,
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

    this.setState(() => ({
      toDashboard: true,
    }));
  };

  render() {
    if (this.state.toDashboard) {
      return <Redirect to='/home' />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='users'>Choose a user:</label>
          <select
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
          </select>
          <button type='submit'>Sign In</button>
        </form>
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
