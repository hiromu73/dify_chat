

import { Box } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Chatmessage from './chatmessage'
import Navigation from './navigation'
import Header from './header'
const chat = () => {
  return (
      <Box sx={{
      display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100vh', width: '80vh',flexDirection: 'column',
      // background: (theme) => theme.palette.background.paper
        backgroundColor: '#f5f5f5'
    }}>
      {/* <Navigation /> */}
      <Header/>
      <Chatmessage />
      <Textfield />
    </Box>
  )
}

export default chat
