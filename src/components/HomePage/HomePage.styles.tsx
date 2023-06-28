import { Button, Grid, Typography } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import Image from "next/image";

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

export const LeftGrid = styled(Grid)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

export const RightGrid = styled(Grid)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export const HomeTitle = styled(Typography)({
  maxWidth: 800,
  fontWeight: 600,
  fontSize: "62px",
  marginBottom: theme.spacing(5.5),
  [theme.breakpoints.down("lg")]: {
    // marginTop: theme.spacing(30),
    fontSize: "55px",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 600,
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
  },
});

export const HomeSubtitle = styled(Typography)({
  maxWidth: 650,
  fontSize: "20px",
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
    maxWidth: 600,
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
  },
});

export const LogoImage = styled(Image)({
  width: 350,
  height: 350,
  [theme.breakpoints.down("lg")]: {
    width: 300,
    height: 300,
  },
});

export const Buttons = styled(Button)({
  width: 239,
  height: 53,
  margin: "0 1rem 5rem 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
});

export default {
  theme,
  LeftGrid,
  RightGrid,
  HomeTitle,
  HomeSubtitle,
  LogoImage,
  Buttons,
};
