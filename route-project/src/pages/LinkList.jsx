import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import queryString from 'query-string';

const activeStyle = {
  fontSize: 20,
  color: 'blue',
};

export default function LinkList() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          /home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          /profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/33" exact activeStyle={activeStyle}>
          /profile/{'id'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/33/asdfasf" exact activeStyle={activeStyle}>
          /profile/{'id'}/{'pw'}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            if (location.pathname !== '/about') {
              return false;
            }
            const { name } = queryString.parse(location.search);
            return !name;
          }}
        >
          /about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=lee"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            if (location.pathname !== '/about') {
              return false;
            }
            const { name } = queryString.parse(location.search);
            return !!name;
          }}
        >
          /about?name=lee
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeStyle={activeStyle}>
          Login
        </NavLink>
      </li>
    </ul>
    /* <ul>
    <li>
      <Link to="/">/home</Link>
    </li>
    <li>
      <Link to="/Profile">/profile</Link>
    </li>
    <li>
      <Link to="/Profile/33">/profile/{'id'}</Link>
    </li>
    <li>
      <Link to="/Profile/33/asdfasf">
        /profile/{'id'}/{'pw'}
      </Link>
    </li>
    <li>
      <Link to="/About">/about</Link>
    </li>
  </ul> */
  );
}
