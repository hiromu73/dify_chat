

import { Box } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Chatmessage from './chatmessage'
import Navigation from './navigation'
const chat = () => {
  return (
      <Box sx={{
      display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100vh', width: '100vh',
      background: (theme) => theme.palette.background.paper
    }}>
      {/* <Navigation /> */}
      <Chatmessage />
      {/* <Textfield /> */}
    </Box>
  )
}

export default chat
