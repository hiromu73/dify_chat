

import { AppBar, Box } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Header from './header'
import { Chat } from '@mui/icons-material'
import Chatmessage from './chatmessage'

const chatare = () => {
  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper, width: '50%', height: '100%', }}>
      <Chatmessage />
      <Textfield />
    </Box>
  )
}

export default chatare
