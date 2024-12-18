

import { AppBar, Box, ButtonBase, Container, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <><CssBaseline />
      <Box  sx={{ bgcolor: (theme) => theme.palette.background.paper}}>
        <h2>Logogazo</h2>
      </Container>
    </>
  )
}

export default header
