

import { AppBar, Avatar, Box, ButtonBase, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react'
import { log } from 'console';

// propsの型定義
interface HeaderProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const header = ({ setIsOpen, isOpen }: HeaderProps) => {
  console.log(isOpen)
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Sidebarが非表示の時だけMenuIconを表示 */}
        {!isOpen && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6">
          Debate内容
        </Typography>
      </Toolbar>
    </AppBar>
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
