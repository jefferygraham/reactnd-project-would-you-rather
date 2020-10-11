import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Would You Rather...</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Item>
              <NavLink to='/home'>Home</NavLink>
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
              Hello, {users[authedUser].name} <Button size='sm'>Logout</Button>
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
