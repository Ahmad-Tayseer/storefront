import React from "react";
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

export default function Footer() {
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#gthhyj' }}>
          <Button color="inherit">&copy;Ahmad Tayseer 2022</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}