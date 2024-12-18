"use client";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      // color="inherit"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        // bgcolor: (theme) => theme.palette.primary.dark,
        bgcolor: '#121212'
      }}
    >
    <Container maxWidth={false}>
      <Toolbar disableGutters>
        <Typography variant="h6" align="center" noWrap component="div">
          <Link href="/" underline="none" color="inherit" >
            debeateApp
          </Link>
        </Typography>
        </Toolbar>
        </Container>
    </AppBar>
  );
};

export default NavigationBar;
