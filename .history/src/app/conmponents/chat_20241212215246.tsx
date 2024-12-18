

import { AppBar, Box } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Chatmessage from './chatmessage'
const chat = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden', height: '70vh', width: '100%' }}>
        <AppBar position="fixed" sx={{ width: '100%', height: '10vh' }}></AppBar>
        <toolbar
      <Chatmessage/>
    </Box><Textfield /></>
  )
}

export default chat