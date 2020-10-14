import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../actions/authedUser';

class Header extends Component {
  handleClick = () => {
    const { dispatch } = this.props;

    dispatch(setAuthedUser(null));
  };

  render() {
    const { authedUser, users } = this.props;
    return (
      <Navbar bg='light' expand='lg' className='p-4'>
        <Navbar.Brand href='#home'>Would You Rather...</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Item>
              <NavLink to='/'>Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/add'>New Question</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/leaderboard'>Leaderboard</NavLink>
            </Nav.Item>
          </Nav>

          {authedUser && (
            <span>
              Hello, {users[authedUser].name}{' '}
              <Button className='mx-3' type='submit' onClick={this.handleClick}>
                Logout
              </Button>
            </span>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Header);
