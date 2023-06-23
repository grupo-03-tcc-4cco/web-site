import { Avatar, Box, Typography } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

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

export const Section = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  width: "50%",
  justifyContent: "space-between",
  marginBottom: theme.spacing(20),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: theme.spacing(10),
  },
});

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  marginBottom: theme.spacing(2),
});

export const AvatarMui = styled(Avatar)({
  width: 150,
  height: 150,
  fontSize: "50px",
  [theme.breakpoints.down("md")]: {
    width: 75,
    height: 75,
  },
});

export const NameAndAge = styled(Typography)({
  marginTop: 20,
  fontWeight: 500,
});

export const Icons = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export default { Section, Container, AvatarMui, NameAndAge, Icons };
