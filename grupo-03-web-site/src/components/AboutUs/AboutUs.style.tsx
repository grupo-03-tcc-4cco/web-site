import { Box } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#212121",
      main: "#212121",
      dark: "#616161",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#fff",
    },
  },
});

export const Container = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
});

export default { Container };
