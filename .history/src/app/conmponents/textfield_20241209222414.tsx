

import React from 'react'
import TextField from '@mui/material/TextField';

const Textfield = () => {

  return (
    <TextField sx={{ "& .MuiInputBase-input": { height: 10 }}}
    placeholder="質問を入力して下さい"
    multiline

    />
  )
}

export default Textfield
