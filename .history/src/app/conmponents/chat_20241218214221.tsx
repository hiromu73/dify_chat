

import { Box, colors, CssBaseline } from '@mui/material'
import React, { useState } from 'react'
import Textfield from './textfield'
import Chatmessage from './chatare'
import Navigation from './navigation'
import Header from './header'
import Sidebar from './sidebar'
import { Chat } from '@mui/icons-material'
import Chatare from './chatare'
const chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    //   <Box sx={{
    //   display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100vh', width: '100%',flexDirection: 'column',
    //   // background: (theme) => theme.palette.background.paper
    //     backgroundColor: colors.red[50] //仮
    // }}>
    //   {/* <Navigation /> */}

    // </Box>
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.100' }}>
        <CssBaseline />
        <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
          <Chatare />
          {/* <Textfield /> */}
        </Box>
    </Box>
  )
}

export default chat