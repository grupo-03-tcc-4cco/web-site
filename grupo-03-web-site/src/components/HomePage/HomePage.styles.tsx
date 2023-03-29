import { createTheme, styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

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

export const BlackBelt = styled(Box)({
  width: "100%",
  height: "48px",
  backgroundColor: "black",
});

export const Container = styled(Box)({
  width: "100%",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const PageTexts = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const PageTitle = styled(Typography)({
  fontWeight: 800,
  fontSize: "100px",
  letterSpacing: "-.05em",
  lineHeight: 1,
  textAlign: "center",
});

export const PageSubtitle = styled(Typography)({
  maxWidth: 1250,
  textAlign: "center",
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: "-.02em",
  color: "#666",
  marginTop: theme.spacing(5),
});

export const GroupButtons = styled(Box)({
  width: "25%",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: theme.spacing(5),
});

export const Buttons = styled(Button)({
  width: 300,
  padding: ".5rem",
  margin: ".5rem",
});

export const AboutUsText = styled(Typography)({
  fontSize: 18,
  maxWidth: 1250,
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: "-.02em",
});

export default {
  BlackBelt,
  Container,
  PageTexts,
  PageTitle,
  PageSubtitle,
  GroupButtons,
  Buttons,
  theme,
  AboutUsText,
};
