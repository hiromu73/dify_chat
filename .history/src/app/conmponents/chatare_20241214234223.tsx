

import { AppBar, Box, colors } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Header from './header'
import { Chat } from '@mui/icons-material'
import Chatmessage from './chatmessage'

const chatare = () => {
  return (
    <Box sx={{ bgcolor: colors.red[50], width: '100%', height: '100%', }}>
      <Chatmessage />
      <Textfield />
    </Box>
  )
}

export default chatare
