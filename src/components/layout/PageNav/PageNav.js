import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss';

const PageNav = () => (
  <nav>
    <NavLink
      className={styles.navLink}
      exact
      to={`${process.env.PUBLIC_URL}/`}
      activeClassName="active"
    >
      home
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/login`}
      activeClassName="active"
    >
      login
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/kitchen`}
      activeClassName="active"
    >
      kitchen
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/tables`}
      activeClassName="active"
    >
      tables
    </NavLink>
    <NavLink
      className={styles.navLink}
      to={`${process.env.PUBLIC_URL}/waiter`}
      activeClassName="active"
    >
      waiter
    </NavLink>
  </nav>
);

export default PageNav;
