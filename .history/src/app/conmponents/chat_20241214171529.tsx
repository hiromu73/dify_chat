

import { Box, colors, CssBaseline } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Chatmessage from './chatare'
import Navigation from './navigation'
import Header from './header'
import Sidebar from './sidebar'
import Chatare from './chatare'
const chat = () => {
  return (
    //   <Box sx={{
    //   display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100vh', width: '100%',flexDirection: 'column',
    //   // background: (theme) => theme.palette.background.paper
    //     backgroundColor: colors.red[50] //仮
    // }}>
    //   {/* <Navigation /> */}

    // </Box>
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.100' }}>
        <CssBaseline />
        <Sidebar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Chatare />
          <Textfield />
        </Box>
    </Box>
  )
}

export default chat
