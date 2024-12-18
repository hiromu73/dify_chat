

import { AppBar, Box, ButtonBase, Container, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <><CssBaseline /><AppBar sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
      <Container maxWidth="md" sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
        <Toolbar>
          <ButtonBase>Logogazo</ButtonBase>
        </Toolbar>
      </Container>
    </AppBar></>
  )
}

export default header