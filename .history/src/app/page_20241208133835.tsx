import styles from "./page.module.css";
import {
  Button,
  Checkbox,
  Container,
  createTheme,
  FormControlLabel,
  FormGroup,
  Paper,
} from "@mui/material";

export default function Home() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>

  );
}
