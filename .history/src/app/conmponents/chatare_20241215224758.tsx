

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
        hei
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Chatmessage />
      </Box>
      <Box sx={{
          width: '60%',
          display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
          bottom: 10,
        }}>
        <Textfield />
        <p style={{ fontSize: 10, textAlign: 'center' }}>AIは必ず負けを認めるとは限りません。諦めずに戦いましょう。</p>
      </Box>
    </Box>
  )
}

export default chatare