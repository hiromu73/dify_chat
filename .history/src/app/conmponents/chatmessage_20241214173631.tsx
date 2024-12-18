

import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export const chatmessage = () => {

  interface Message {
  role: 'user' | 'assistant';
  content: string;
}
  const messages = {
    '1: Hello, how are you?': 'user',
    '2: Hello, how are you?': 'user',
    '3: Hello, how are you?': 'user',
    '4: Hello, how are you?': 'user',
    '5: Hello, how are you?': 'user',
    '6: Hello, how are you?': 'user',
    '7: Hello, how are you?': 'user',
    '8: Hello, how are you?': 'user',
    '9: Hello, how are you?': 'user',
  }
  return (
<Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
      <Card sx={{ maxWidth: '600px', mx: 'auto', p: 2 }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              mb: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                bgcolor: message.role === 'user' ? 'primary.main' : 'grey.200',
                color: message.role === 'user' ? 'white' : 'black',
                borderRadius: 1,
                p: 1,
                maxWidth: '70%',
              }}
            >
              {message.content}
            </Typography>
          </Box>
        ))}
      </Card>
    </Box>
  )
}
