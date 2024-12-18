

import { AppBar, Box, colors } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Header from './header'
import { Chat } from '@mui/icons-material'
import Chatmessage from './chatmessage'

const chatare = () => {
  return (
    // (theme) => theme.palette.background.paper
    <Box sx={{ bgcolor: colors.red[50], width: '100%', height: '100%',display: 'flex',flexDirection: 'column',
        alignItems: 'center',   }}>
      <Chatmessage />
      <Textfield />
    </Box>
  )
}

export default chatare
