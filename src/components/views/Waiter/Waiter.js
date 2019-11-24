import React from 'react';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/waiter/ordering/new`}>
        New Order
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/ordering/order/123abc`}>
        Change Order
      </Link>
    </div>
  </div>
);

export default Waiter;
