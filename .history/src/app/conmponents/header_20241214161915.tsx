

import { AppBar, Box, ButtonBase, Container, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <><CssBaseline />
      <Container  sx={{ bgcolor: (theme) => theme.palette.background.paper ,width: '100%'}}>
        <h2>Logogazo</h2>
      </Container>
    </>
  )
}

export default header
