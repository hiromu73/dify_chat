

import { AppBar, Avatar, Box, ButtonBase, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    // <><CssBaseline />
    //   <Box sx={{ bgcolor: (theme) => theme.palette.background.paper, width: '100%' }}>
    //     <h2 style={{textAlign: 'center'}}>Debeat内容</h2>
    //   </Box>
    // </>
        <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onToggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI チャットアシスタント
        </Typography>
        <Avatar src="https://github.com/shadcn.png" alt="@shadcn" />
      </Toolbar>
    </AppBar>
  )
}

export default header
