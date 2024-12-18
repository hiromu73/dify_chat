

import { AppBar, Box, ButtonBase, Container, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <><CssBaseline />
      <Container  sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
        Logogazo</h2>
      </Container>
    </>
  )
}

export default header
