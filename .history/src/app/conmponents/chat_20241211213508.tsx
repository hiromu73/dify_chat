

import { Box } from '@mui/material'
import React from 'react'
import Textfield from './textfield'


const chat = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '20px', border: '1px solid #ccc', overflow: 'hidden', height: '70vh', width: '100%' }}>
      
      <Textfield />
    </Box>
  )
}

export default chat
