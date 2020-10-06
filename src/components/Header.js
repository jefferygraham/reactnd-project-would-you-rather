import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <a href='/'>Home</a>
            <a href='/'>New Question</a>
            <a href='/'>Leader Board</a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
