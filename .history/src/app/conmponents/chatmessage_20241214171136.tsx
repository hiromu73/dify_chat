

import { AppBar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Header from './header'

const messages = [
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
]
const chatmessage = () => {
  return (
    <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
      <Card sx={{ maxWidth: '600px', mx: 'auto', p: 2 }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              // justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              mb: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                // bgcolor: message.role === 'user' ? 'primary.main' : 'grey.200',
                // color: message.role === 'user' ? 'white' : 'black',
                borderRadius: 1,
                p: 1,
                maxWidth: '70%',
              }}
            >
              {/* {message.content} */}
            </Typography>
          </Box>
        ))}
      </Card>
    </Box>
    // <Box sx={{}} style={{ width: '100%', height: '85vh', }}>

    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    //   chatmessage
    // </Box>
  )
}

export default chatmessage
