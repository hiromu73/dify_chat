

import { AppBar, Avatar, Box, ButtonBase, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react'

const header = () => {
  return (
    <><CssBaseline />
      <Box sx={{ p: 2, bgcolor: (theme) => theme.palette.background.paper, width: '100%' ,display: 'flex', alignItems: 'center'}}>
        <IconButton edge="start" color="inherit" sx={{ mr: 2  ,(theme) =></Box>}}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Debate内容
        </Typography>
        <Avatar src="https://github.com/shadcn.png" alt="@shadcn" />
      </Box>
    </>
    //     <AppBar position="static" elevation={1} sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
    //   <Toolbar>
    //     <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" sx={{ flexGrow: 1 }}>
    //       Debate内容
    //     </Typography>
    //     <Avatar src="https://github.com/shadcn.png" alt="@shadcn" />
    //   </Toolbar>
    // </AppBar>
  )
}

export default header
