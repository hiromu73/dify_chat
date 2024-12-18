

import { AppBar, Box, ButtonBase, Container, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <><CssBaseline />
      <Box  sx={{ bgcolor: (theme) => theme.palette.background.paper, WebkitFlexShrink}}>
        <h2>Logogazo</h2>
      </Box>
    </>
  )
}

export default header
