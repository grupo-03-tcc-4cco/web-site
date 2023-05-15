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
  width: "50%",
  justifyContent: "space-between",
  marginBottom: theme.spacing(20),
});

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

export const AvatarMui = styled(Avatar)({
  width: 150,
  height: 150,
  fontSize: "50px",
});

export const NameAndAge = styled(Typography)({
  marginTop: 20,
  fontWeight: 500,
});

export const Icons = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const Triangle = styled(Box)({
  width: 0,
  height: 0,
  borderTop: "40px solid red",
  borderRight: "40px solid transparent",
  position: "absolute",
  transform: "rotate(135deg)",
  top: "100px",
  left: "100px",
});

export default { Section, Container, AvatarMui, NameAndAge, Icons, Triangle };
