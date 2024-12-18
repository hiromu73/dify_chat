import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react';

// propsの型定義
interface HeaderProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const Header = ({ setIsOpen, isOpen }: HeaderProps) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Debate内容
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
