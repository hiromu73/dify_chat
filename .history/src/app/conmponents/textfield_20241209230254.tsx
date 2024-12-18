

import React from 'react'
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Textfield = () => {

  return (
    <TextField sx={{ "& .MuiInputBase-input": { height: 10 }}}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth
      slotProps={{
        input: {
          style: {
            borderRadius: '20px', // 角丸の設定
            border: '1px solid #ccc', // 枠線の設定
            padding: '8px', // 内側の余白
          },
        }
        // endAdornment: (
        //   <InputAdornment position="end">
        //     <IconButton
        //       onClick={() => {
        //         console.log('送信されました');
        //       }}
        //     >
        //       <SendIcon />
        //     </IconButton>
        //   </InputAdornment>
        // ),
      }}
    />
  )
}

export default Textfield
