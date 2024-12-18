"use client";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      // color="inherit"
      color=
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        // bgcolor: (theme) => theme.palette.primary.dark,
        // bgcolor: '#121212'
      }}
    >
      <Toolbar>
        <Typography variant="h6" align="center" noWrap component="div">
          <Link href="/" underline="none" color="inherit">
            debeateApp
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
