"use client";
import { AppBar, Box, Container, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <Box sx={{        width: '80%',
        maxWidth: '800px', // または必要な幅を指定
        margin: '0 auto',   }}>
      <AppBar
      position="fixed"
      // color="inherit"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        // bgcolor: (theme) => theme.palette.primary.dark,
        bgcolor: '#121212'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" align="center" noWrap component="div">
            <Link href="/" underline="none" color="inherit" >
              debeateApp
            </Link>
          </Typography>
        </Toolbar>
      </Container>
      </AppBar>
    </Box>

  );
};

export default NavigationBar;
