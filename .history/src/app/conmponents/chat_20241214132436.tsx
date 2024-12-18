

import { Box, colors } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Chatmessage from './chatmessage'
import Navigation from './navigation'
import Header from './header'
const chat = () => {
  return (
      <Box sx={{
      display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100vh', width: '100vh',flexDirection: 'column',
      // background: (theme) => theme.palette.background.paper
        backgroundColor: colors.grey
    }}>
      {/* <Navigation /> */}
      <Header/>
      <Chatmessage />
      <Textfield />
    </Box>
  )
}

export default chat
