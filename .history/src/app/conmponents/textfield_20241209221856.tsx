

import React from 'react'
import TextField from '@mui/material/TextField';

const Textfield = () => {

  return (
    <TextField label="Input" sx={{ "& .MuiInputBase-input": { height: 10 }, width: ,}}
    placeholder="質問を入力して下さい"
      multiline

    />
  )
}

export default Textfield
