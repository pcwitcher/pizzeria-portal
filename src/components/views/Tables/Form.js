import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import styles from './Form.module.scss';

const Form = (props) => {
  const [table, setTable, time, setTime, length, setLength] = React.useState();


  const handleTableChange = event => {
    setTable(event.target.value);
  };

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const handleLengthChange = event => {
    setLength(event.target.value);
  };


  const tables = [
    {
      value: '1',
      label: 'Table1',
    },
    {
      value: '2',
      label: 'Table2',
    },
    {
      value: '3',
      label: 'Table3',
    },
    {
      value: '4',
      label: 'Table4',
    },
  ];


  return (
    <form className={styles.container} noValidate autoComplete="off">
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue={props.tabValue === 0 ? 'Booking' : 'Event'}
        className={styles.textField}
        margin="normal"
      />
      <TextField
        id="select-table"
        select
        label="Select"
        className={styles.textField}
        value={table}
        onChange={handleTableChange}
        SelectProps={{
          MenuProps: {
            className: styles.menu,
          },
        }}
        helperText="Please select your table"
        margin="normal"
      >
        {tables.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="time"
        select
        label="Select"
        className={styles.textField}
        value={time}
        onChange={handleTimeChange}
        SelectProps={{
          MenuProps: {
            className: styles.menu,
          },
        }}
        helperText="Please select time of booking"
        margin="normal"
      >
        <MenuItem value={1}>
          12:00
        </MenuItem>
        <MenuItem value={1}>
          13:00
        </MenuItem>
        <MenuItem value={1}>
          14:00
        </MenuItem>

      </TextField>
      <TextField
        id="length"
        select
        label="Select"
        className={styles.textField}
        value={length}
        onChange={handleLengthChange}
        SelectProps={{
          MenuProps: {
            className: styles.menu,
          },
        }}
        helperText="Please select length of booking"
        margin="normal"
      >
        <MenuItem value={1}>
          1 hour
        </MenuItem>
        <MenuItem value={1}>
          2 hour
        </MenuItem>
        <MenuItem value={1}>
          3 hour
        </MenuItem>

      </TextField>
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Name"
        className={styles.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Phone Number"
        className={styles.textField}
        margin="normal"
      />
      <Button className={styles.button} variant="contained" type="submit" color="primary">
        Add new
      </Button>
    </form>
  );
};

Form.propTypes = {
  tabValue: PropTypes.number,
};


export default Form;
