"use client";
// import styles from "./page.module.css";
// import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  useTheme,
} from "@mui/material";

import Chat from "./conmponents/chat";
import Navigation  from "./conmponents/navigation";
export default function Home() {
  // 共通テーマの取得
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*ContainerのデフォルトWidthをfalseにする */}
      <Container maxWidth={false} sx={{
        p: 1,
        // height: '100vh'

      }} >
        {/* <Navigation /> */}
        <Paper elevation={1} sx={{ p: 5 }}>
          <Chat/>
        </Paper>
      </Container>
      {/* <Button variant="contained" color="primary">
          ボタン
        </Button> */}
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