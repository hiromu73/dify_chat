"use client";
// import styles from "./page.module.css";
// import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  Toolbar,
  useTheme,
} from "@mui/material";

import Chat from "./conmponents/chat";
import Navigation  from "./conmponents/navigation";
import SideBar from "./conmponents/sidebar";
import Textfield from "./conmponents/textfield";
import Header from "./conmponents/header";
export default function Home() {
  // 共通テーマの取得
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <SideBar />
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%', background: (theme) => theme.palette.background.paper }}>
              <Header/>
      <Chatmessage />
      <Textfield />
          <Chat/>
        </Box>
    </ThemeProvider>
  )
//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//       primary: {
//         main: '#212121',
//         dark: '#2F2F2F'
//         }
//       }
//   })

//   const lightTheme = createTheme({
//     palette: {
//       mode: 'light',
//       secondary: {
//         main: '#FFFFFF',
//         light: '#F0F4F8',
//         }
//       }
//   })

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <Container>
//       <Paper elevation={3} sx={{ p: 5 }}>
//         <h1 className={styles.title}>Welcome to Material UI!</h1>
//         <FormGroup>
//           <FormControlLabel
//             control={<Checkbox defaultChecked />}
//             label="Label"
//           />
//           <FormControlLabel required control={<Checkbox />} label="Required" />
//           <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//         </FormGroup>
//         <hr />
//         <Button variant="contained" color="primary">
//           ボタン
//         </Button>
//       </Paper>
//     </Container>
//     </ThemeProvider>

//   );
}
