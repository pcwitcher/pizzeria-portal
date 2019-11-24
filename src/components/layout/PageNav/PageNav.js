import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <nav style={{ textTransform: 'uppercase', fontSize: '20px' }}>
    <NavLink
      style={{
        textDecoration: 'none',
        margin: '12px',
        color: 'darkgreen',
      }}
      exact
      to={`${process.env.PUBLIC_URL}/`}
      activeClassName="active"
    >
      home
    </NavLink>
    <NavLink
      style={{
        textDecoration: 'none',
        margin: '12px',
        color: 'darkgreen',
      }}
      to={`${process.env.PUBLIC_URL}/login`}
      activeClassName="active"
    >
      login
    </NavLink>
    <NavLink
      style={{
        textDecoration: 'none',
        margin: '12px',
        color: 'darkgreen',
      }}
      to={`${process.env.PUBLIC_URL}/kitchen`}
      activeClassName="active"
    >
      kitchen
    </NavLink>
    <NavLink
      style={{
        textDecoration: 'none',
        margin: '12px',
        color: 'darkgreen',
      }}
      to={`${process.env.PUBLIC_URL}/tables`}
      activeClassName="active"
    >
      tables
    </NavLink>
    <NavLink
      style={{
        textDecoration: 'none',
        margin: '12px',
        color: 'darkgreen',
      }}
      to={`${process.env.PUBLIC_URL}/waiter`}
      activeClassName="active"
    >
      waiter
    </NavLink>
  </nav>
);

export default PageNav;
