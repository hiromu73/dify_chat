

import { AppBar, Box } from '@mui/material'
import React from 'react'

const header = () => {
  return (
  <AppBar>
    <Container maxWidth="md">
      <Toolbar>
        <ButtonBase>Logogazo</ButtonBase>
        <ButtonBase sx={{ ml: "auto" }}>Menu</ButtonBase>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default header
