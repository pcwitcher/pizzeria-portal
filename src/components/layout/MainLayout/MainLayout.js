import React from 'react';
import PageNav from '../PageNav/PageNav';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = ({ children }) => (
  <div className="MainLayout">
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />
      {children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;

