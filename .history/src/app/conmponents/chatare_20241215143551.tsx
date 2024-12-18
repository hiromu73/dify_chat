

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
            <Box
        sx={{
          width: '50%', // 共通の幅を親Boxで定義
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // コンポーネント間の間隔
        }}
      ></Box>


    </Box>
  )
}

export default chatare
