import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to='/home'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/new'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink exact to='leaderboard'>
                  Leaderboard
                </NavLink>
              </li>
            </ul>
            {this.props.authedUser && (
              <div>
                <p>Hello, {users[authedUser].name}</p>
                <button>Logout</button>
              </div>
            )}
          </nav>
        </header>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Nav);
