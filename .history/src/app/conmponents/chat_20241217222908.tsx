

import { Box, colors, CssBaseline } from '@mui/material'
import React from 'react'
import Textfield from './textfield'
import Chatmessage from './chatare'
import Header from './header'
import Sidebar from './sidebar'
import Chatare from './chatare'
const chat = () => {

    // 状態管理を親コンポーネントで行う
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    //   <Box sx={{
    //   display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100vh', width: '100%',flexDirection: 'column',
    //   // background: (theme) => theme.palette.background.paper
    //     backgroundColor: colors.red[50] //仮
    // }}>
    //   {/* <Navigation /> */}

    // </Box>
      <Box sx={{ display: 'flex', height: '100vh', }}>
        {/* <CssBaseline /> */}
        <Sidebar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Chatare />
        </Box>
    </Box>
  )
}

export default chat
