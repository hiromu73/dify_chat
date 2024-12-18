"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'primary.main'
      }}
    >
      <Toolbar>
        <Typography variant="h6" align="center" noWrap component="div">
          <Link
          debeateApp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
