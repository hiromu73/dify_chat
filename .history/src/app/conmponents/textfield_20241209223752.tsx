

import React from 'react'
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';

const Textfield = () => {

  return (
    <TextField sx={{ "& .MuiInputBase-input": { height: 10 }, " & MuiOutlinedInput-root": {
          borderRadius: '20px', // 角丸の設定
        }}}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth
            InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                // ここに送信時の処理を追加
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
