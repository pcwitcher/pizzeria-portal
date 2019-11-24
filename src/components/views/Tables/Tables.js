import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = props => (
  <div className={styles.component}>
    <h2>Table View</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        New Booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123abc`}>
        Change Booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/event/123abc`}>
        Change Event
      </Link>
    </div>
  </div>
);

export default Tables;
