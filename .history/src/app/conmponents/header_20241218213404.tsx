

import { AppBar, Avatar, Box, ButtonBase, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react'
import { log } from 'console';

// propsの型定義
interface HeaderProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

console.log

const header = ({ setIsOpen, isOpen }: HeaderProps) => {
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
  )
}


export default header
