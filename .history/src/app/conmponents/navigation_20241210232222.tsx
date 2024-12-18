"use client";
import { ThemeProvider } from "@emotion/react";
import { AppBar, colors, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: ThemeProvider.theme.palette.primary.dark,
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
