import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title/Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, delivery, amount) {
  return { id, date, name, shipTo, paymentMethod, delivery, amount };
}

const rows = [
  createData(
    0,
    '08:00',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    'delivery',
    312.44,
  ),
  createData(
    1,
    '10:42',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    'delivery',
    866.99,
  ),
  createData(
    2,
    '15:08',
    'Tom Scholz',
    'Boston, MA',
    'MC ⠀•••• 1253',
    'inhouse',
    100.81,
  ),
  createData(
    3,
    '18:03',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    'inhouse',
    654.39,
  ),
  createData(
    4,
    '19:47',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    'inhouse',
    212.79,
  ),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Inhouse/Delivery</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.delivery}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#">
          See more orders
        </Link>
      </div>
    </>
  );
}
