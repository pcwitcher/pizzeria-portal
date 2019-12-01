import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TablesBookings from '../../features/TablesBookings/TablesBookings';
import Form from './Form';
import { Paper, Tabs, Tab } from '@material-ui/core';


const Tables = props => {

  let value = 0;
  value = props.location.pathname === '/tables/booking/events/new' ? 1 : 0;

  console.log(value);
  return (
    <div className={styles.component}>
      <Paper className={styles.paper}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab component={props => <Link to={`${process.env.PUBLIC_URL}/tables/booking/booking/new`} {...props} />} label='New booking' />
          <Tab component={props => <Link to={`${process.env.PUBLIC_URL}/tables/booking/events/new`} {...props} />} label='New event' />
        </Tabs>
      </Paper>
      <Paper className={styles.paper}>
        <Form tabValue={value} />
      </Paper>
      <Paper className={styles.paper}>
        <TablesBookings />
      </Paper>
    </div>
  );
};

Tables.propTypes = {
  location: PropTypes.node,
  pathname: PropTypes.node,
};


export default Tables;
