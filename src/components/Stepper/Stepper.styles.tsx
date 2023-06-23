import { Box, Button, Container } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

export const theme = createTheme({
  spacing: 4,
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

export const ButtonFinish = styled(Button)({});

export const Stepper = styled(MobileStepper)({
  position: "static",
  maxWidth: 400,
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

export const StepContent = styled(Box)({
  margin: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

export const Section = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(15, 0),
    width: "100%",
  },
});
