

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
        <Sidebar
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
  )
}


export default header
