"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" color="">
          Clipped drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
