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
function createData(id, date, name, booking) {
  return { id, date, name, booking };
}

const rows = [
  createData(0, '08:00', 'Elvis Presley', 'event'),
  createData(1, '10:42', 'Paul McCartney', 'booking'),
  createData(2, '15:08', 'Tom Scholz', 'event'),
  createData(3, '18:03', 'Michael Jackson', 'booking'),
  createData(4, '19:47', 'Bruce Springsteen', 'event'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Events/Bookings for today</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Events/Bookings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.booking}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
