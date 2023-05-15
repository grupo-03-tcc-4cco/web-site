import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import Image from "next/image";
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

export const ButtonFinish = styled(Button)({
  // position: "absolute",
  // top: "655px",
  // right: "330px",
});

export const Stepper = styled(MobileStepper)({
  position: "static",
  maxWidth: 400,
  flexGrow: 1,
});

export const StepContent = styled(Box)({
  margin: "20px",
  height: "85vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Section = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});
