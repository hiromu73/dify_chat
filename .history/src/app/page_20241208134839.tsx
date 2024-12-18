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

   const darktheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#d87274',
        light: '#ffa2a3',
        dark: '#a34449'
        }
      }
  })

  const subtheme = createTheme({
    palette: {
      mode: 'light',
      secondary: {
        main: '#5F3E3A',
        light: '#8d6964',
        dark: '#341714'
        }
      }
  })

  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createTheme(
    {
      palette: {
      mode: isDarkMode ? 'dark' : 'light'
    }
    }
  )
  return (
    <ThemeProvider theme={theme}>
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
        <Button variant="contained" color="primary">
          ボタン
        </Button>
      </Paper>
    </Container>
    </ThemeProvider>

  );
}
