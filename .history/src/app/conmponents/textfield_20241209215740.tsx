

import React from 'react'
import TextField from '@mui/material/TextField';

const Textfield = () => {
  const inputProps = {
  step: 300,
};
  return (
    <TextField id="time" type="time" />
  )
}

export default Textfield
