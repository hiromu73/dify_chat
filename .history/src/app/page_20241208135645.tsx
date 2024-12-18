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
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container>
      <Paper elevation={3} sx={{ p: 5 }}>
        <h1 className={styles.title}>Welcome to Material UI!</h1>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <hr />
        <Button variant="contained" color=the>
          ボタン
        </Button>
      </Paper>
    </Container>
    </ThemeProvider>

  );
}
