import React from 'react';
import PropTypes from 'prop-types';

const TablesBookingEdit = props => <h2>{props.match.params.id}</h2>;

export default TablesBookingEdit;

TablesBookingEdit.propTypes = {
  match: PropTypes.any,
};
