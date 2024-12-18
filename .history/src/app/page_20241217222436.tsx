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
import Header from "./conmponents/header";
import Chatmessage from "./conmponents/chatare";
import Textfield from "./conmponents/textfield";
import { useState } from "react";
export default function Home() {

  const theme = useTheme();

  // 状態管理を親コンポーネントで行う
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}></Box>
      <Chat />
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
