"use client";
import styles from "./page.module.css";
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Paper,
  ThemeProvider,
} from "@mui/material";

export default function Home() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#212121',
        dark: '#2F2F2F'
        }
      }
  })

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      secondary: {
        main: '#FFFFFF',
        light: '#F0F4F8',
        }
      }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
      <Paper elevation={3} sx={{ p: 5 }}>

        <Button variant="contained" color="primary">
          ボタン
        </Button>
      </Paper>
    </Container>
    </ThemeProvider>

  );
}
