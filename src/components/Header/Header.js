import React from "react";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import './Header.scss';

export default function Header(props) {

  return (
    <>
      <AppBar style={{ backgroundColor: '#frigfi' }} className="header_container" position="static">
        <Toolbar>
          <h3 data-testid='header'>My Store</h3>
        </Toolbar>
      </AppBar>
    </>
  )
}