

import React from 'react'
import TextField from '@mui/material/TextField';

const Textfield = () => {

  return (
    <TextField sx={{ "& .MuiInputBase-input": { height: 10 }, " & MuiOutlinedInput-root": {
          borderRadius: '40px', // 角丸の設定
        }}}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth

    />
  )
}

export default Textfield
