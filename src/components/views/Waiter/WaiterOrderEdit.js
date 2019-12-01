import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderEdit = props => (
  <div className={styles.component}>
    <h2>{props.match.params.id}</h2>
  </div>
);

export default WaiterOrderEdit;

WaiterOrderEdit.propTypes = {
  match: PropTypes.any,
};
