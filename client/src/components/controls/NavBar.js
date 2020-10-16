import React from 'react';
import classNames from 'classnames';

import { AppBar, Toolbar, Button, IconButton, Grid } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';

function CustomNavBar(props) {
  return (
    <AppBar style={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Grid container direction="row" justify="flex-start" alignItems="right">
          <Button color="transparent">
            <div className="App-logo">
              <img
                className="App-image"
                src="https://cdn-5d2a9ba3f911c80ef4a217ce.closte.com/wp-content/uploads/2019/03/curology-logo.png"
                alt="logo"
              />
            </div>
          </Button>
        </Grid>
        <div className="Menu-item">
          <Grid container direction="row" justify="flex-end" alignItems="center">
            <IconButton color="success" aria-label="open drawer" onClick={props.handleDrawerToggle}>
              <Menu />
            </IconButton>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default CustomNavBar;
