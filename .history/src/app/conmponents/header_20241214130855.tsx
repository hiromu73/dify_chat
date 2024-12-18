

import { AppBar, Box, ButtonBase, Container, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <><CssBaseline />
      <AppBar background=>
      <Container maxWidth="md" sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
        <Toolbar>
          <ButtonBase>Logogazo</ButtonBase>
        </Toolbar>
      </Container>
    </AppBar></>
  )
}

export default header