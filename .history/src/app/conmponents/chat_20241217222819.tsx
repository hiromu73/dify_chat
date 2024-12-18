

import { Box, colors, CssBaseline } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Chatmessage from './chatare'
import Header from './header'
import Sidebar from './sidebar'
import Chatare from './chatare'
const chat = () => {
  return (

      <Box sx={{ display: 'flex', height: '100vh', }}>
        {/* <CssBaseline /> */}
        <Sidebar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Chatare />
        </Box>
    </Box>
  )
}

export default chat
