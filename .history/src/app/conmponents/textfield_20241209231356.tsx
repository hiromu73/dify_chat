

import React from 'react'
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Textfield = () => {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '20px', border: '1px solid #ccc', overflow: 'hidden' }}></Box>
    <TextField sx={{ "& .MuiInputBase-input": { height: 10 }, flexGrow: 1}}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth
      slotProps={{
        input: {
          style: {
            borderRadius: '20px', // 角丸の設定
            border: '1px solid #ccc', // 枠線の設定

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
  )
}

export default Textfield
