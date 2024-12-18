

import { AppBar, Box, ButtonBase, Container, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <><CssBaseline />
      <Box sx={{ bgcolor: (theme) => theme.palette.background.paper, width: '100%', }}>
        <h6>ここに</h6>
        <h2 style={{textAlign: 'center'}}>Debeat内容</h2>
      </Box>
    </>
  )
}

export default header
