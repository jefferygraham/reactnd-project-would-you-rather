import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
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
        </nav>
      </header>
    </div>
  );
};
