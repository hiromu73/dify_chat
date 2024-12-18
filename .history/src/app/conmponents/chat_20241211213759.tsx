

import { Box } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import chatmessage from './textfield'
const chat = () => {
  return (
    <><Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden', height: '70vh', width: '100%' }}>
      <chatmessage/>
    </Box><Textfield /></>
  )
}

export default chat
