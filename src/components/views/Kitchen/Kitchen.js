import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  { orderTime: '18:45', orderTableNo: 'o20', dishes: ['duck', 'potatoes', 'tea'], order: null },
  { orderTime: '18:30', orderTableNo: 'o21', dishes: ['ice-cream', 'onion soup'], status: 'thinking', order: null },
  { orderTime: '18:25', orderTableNo: 't3', dishes: ['beef jerky', 'chips'], status: 'ordered', order: 123 },
  { orderTime: '18:00', orderTableNo: 't2', dishes: ['peas soup', 'beetroot chips'], status: 'prepared', order: 234 },
  { orderTime: '17:45', orderTableNo: 't4', dishes: ['napoli', 'chocolate cake'], status: 'delivered', order: 345 },
  { orderTime: '17:30', orderTableNo: 't6', dishes: ['muffin', 'black coffee'], status: 'paid', order: 456 },
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Delivery/Table</TableCell>
          <TableCell>Dishes</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.orderTime}
            </TableCell>
            <TableCell>
              {row.orderTableNo}
            </TableCell>
            <TableCell>
              {row.dishes.map(dish => (
                <p key={dish} >{dish}</p>
              ))}
            </TableCell>
            <TableCell>
              <Button>Finished</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
