import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBookingEdit from './components/views/Tables/TablesBookingEdit';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesEventsEdit from './components/views/Tables/TablesEventsEdit';
import TablesEventsNew from './components/views/Tables/TablesEventsNew';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import WaiterOrderEdit from './components/views/Waiter/WaiterOrderEdit';
import Waiter from './components/views/Waiter/Waiter';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Homepage}
          />
          <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route
            path={process.env.PUBLIC_URL + '/kitchen'}
            component={Kitchen}
          />
          <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
        </Switch>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + '/tables/booking/book/:id'}
            component={TablesBookingEdit}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables/booking/new'}
            component={TablesBookingNew}
          />
          <Route
            path={process.env.PUBLIC_URL + '/tables/events/event/:id'}
            component={TablesEventsEdit}
          />
          <Route
            path={process.env.PUBLIC_URL + '/tables/events/new'}
            component={TablesEventsNew}
          />
          <Route
            path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'}
            component={WaiterOrderEdit}
          />{' '}
          <Route
            path={process.env.PUBLIC_URL + '/waiter/ordering/new'}
            component={WaiterOrderNew}
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
