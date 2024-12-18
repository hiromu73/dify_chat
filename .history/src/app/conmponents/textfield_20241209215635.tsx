

import React from 'react'
import TextField from '@mui/material/TextField';

const textfield = () => {
  const inputProps = {
  step: 300,
};
  return (
    <TextField id="time" type="time" inputProps={inputProps} />
  )
}

export default textfield
