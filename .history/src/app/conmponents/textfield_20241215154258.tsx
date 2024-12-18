

import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Textfield = () => {

  const textformstyle = {
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'none',  // ホバー時のボーダー色
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',    // 通常時のボーダー色(アウトライン)
      },
      '&:hover fieldset': {
        border: 'none',    // ホバー時のボーダー色(アウトライン)
      },
    }
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100%', borderRadius: '40px ', width: '100%', bgcolor: (theme) => theme.palette.secondary.main }}>
    {/*& .MuiInputBase-input":  <TextField>で生成したテキストボックスそのものを */}
    <TextField sx={{ textformstyle, "& .MuiInputBase-input": {   }, flexGrow: 1}}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth
      slotProps={{
        input: {
          style: {
            border: '0 solid #e3e3e3',
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
