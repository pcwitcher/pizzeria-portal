import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const TablesEventsEdit = props => (
  <h2 className={styles.component}>{props.match.params.id}</h2>
);

export default TablesEventsEdit;

TablesEventsEdit.propTypes = {
  match: PropTypes.any,
};
