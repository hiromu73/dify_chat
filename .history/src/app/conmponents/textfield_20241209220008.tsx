

import React from 'react'
import TextField from '@mui/material/TextField';

const Textfield = () => {

  return (
    <TextField sx={{ "& .MuiInputBase-input": { height: 10 }, width: 1000 }}
    placeholder=""/>
  )
}

export default Textfield
