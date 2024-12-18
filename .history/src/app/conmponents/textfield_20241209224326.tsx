

import React from 'react'
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Textfield = () => {

  return (
    <TextField sx={{ "& .MuiInputBase-input": { height: 10 }, " & MuiOutlinedInput-root": {
          borderRadius: '20px', // 角丸の設定
        }}}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth
        slotProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                console.log('送信されました');
              }}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Textfield
