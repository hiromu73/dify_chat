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
  );
}
