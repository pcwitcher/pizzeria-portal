import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title/Title';
import { Link } from 'react-router-dom';
import styles from './TablesBookings.module.scss';

// Generate Order Data
function createData(id, time, table1, table2, table3, table4) {
  return { id, time, table1, table2, table3, table4 };
}

const rows = [
  createData(
    12,
    '12:00',
    'reserved',
    'available',
    'available',
    'reserved',
  ),
  createData(
    13,
    '13:00',
    'available',
    'reserved',
    'available',
    'reserved',
  ),
  createData(
    14,
    '14:00',
    'reserved',
    'available',
    'reserved',
    'reserved',
  ),
  createData(
    15,
    '15:00',
    'reserved',
    'reserved',
    'available',
    'reserved',
  ),
  createData(
    16,
    '16:00',
    'available',
    'available',
    'reserved',
    'reserved',
  ),
];

export default function Tables() {

  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={styles.tableCell} component={props => <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123abc`} {...props} />}>{row.time}</TableCell>
              <TableCell className={styles.tableCell} component={props => <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123abc`} {...props} />}>{row.table1}</TableCell>
              <TableCell className={styles.tableCell} component={props => <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123abc`} {...props} />}>{row.table2}</TableCell>
              <TableCell className={styles.tableCell} component={props => <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123abc`} {...props} />}>{row.table3}</TableCell>
              <TableCell className={styles.tableCell} component={props => <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123abc`} {...props} />}>{row.table4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
