import React from 'react';
import { AppBar, Toolbar, Button, Hidden, IconButton, Menu } from '@material-ui/core';

function NavBar(props) {
  return (
    <AppBar>
      <Toolbar>
        <div>
          <Button color="transparent" href="#">
          </Button>
        </div>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
