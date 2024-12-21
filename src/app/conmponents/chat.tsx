

import { Box, colors, CssBaseline } from '@mui/material'
import React, { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Chatare from './chatare'
const chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.100' }}>
        <CssBaseline />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Chatare/>
      </Box>
    </Box>
  )
}

export default chat
