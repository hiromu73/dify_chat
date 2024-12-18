"use client";
import { AppBar, Box, Container, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 'calc(100% - 2rem)', // Containerのpadding(p: 1)を考慮
        margin: '0 auto',
      }}
    >
      <AppBar
      position="fixed"
      color="inherit"
      sx={{
        width: '100%',
        maxWidth: 'calc(100% - 2rem)', // Containerのpadding(p: 1)を考慮
        margin: '0 auto',
        bgcolor
      }}
    >
        <Toolbar disableGutters>
          <Typography variant="h6" align="center" noWrap component="div">
            <Link href="/" underline="none" color="inherit" >
              debeateApp
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

  );
};

export default NavigationBar;
