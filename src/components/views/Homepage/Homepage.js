import React from 'react';
import Orders from '../../features/Orders/Orders';
import Reservations from '../../features/Reservations/Reservations';
import { Paper } from '@material-ui/core';
import styles from './Homepage.module.scss';

const Homepage = () => (
  <div className={styles.component}>
    <Paper className={styles.paper}>
      <Orders className={styles.orders} />
    </Paper>
    <Paper className={styles.paper}>
      <Reservations className={styles.bookings} />
    </Paper>
  </div>
);

export default Homepage;
