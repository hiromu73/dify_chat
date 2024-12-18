

import { AppBar, Box, colors } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Header from './header'
import { Chat } from '@mui/icons-material'
import Chatmessage from './Chatmessage'

const chatare = () => {
  return (
    // (theme) => theme.palette.background.paper
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <Box sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Chatmessage />
      </Box>
      <Box></Box>

    </Box>
  )
}

export default chatare
