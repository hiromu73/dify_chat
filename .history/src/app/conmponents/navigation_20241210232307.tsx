"use client";
import { ThemeProvider } from "@emotion/react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: (theme) => theme.palette.primary.main,
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
