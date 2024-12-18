

import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Textfield = () => {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <TextField sx={{ "& .MuiInputBase-input": { height: 20 }, flexGrow: 1}}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth
      slotProps={{
        input: {
          style: {
            borderRadius: '40px', // 角丸の設定
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  console.log('RAGの添付');
                }}
              >
                < AddPhotoAlternateIcon/>
              </IconButton>
              <IconButton
                onClick={() => {
                  console.log('プロンプトの送信');
                }}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }
      }}
      />
      </Box>
  )
}

export default Textfield
