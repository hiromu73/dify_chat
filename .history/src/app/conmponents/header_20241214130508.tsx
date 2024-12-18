

import { AppBar, Box, ButtonBase, Container, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
  <AppBar >
    <Container maxWidth="md" >
      <Toolbar>
        <ButtonBase>Logogazo</ButtonBase>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default header
