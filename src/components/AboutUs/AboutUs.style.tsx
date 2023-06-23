import { Box, Typography, IconButton } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

export const theme = createTheme();

export const Container = styled(Box)({
  height: "90vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
});

export const SectionTitle = styled(Typography)({
  maxWidth: 1100,
  margin: theme.spacing(0, "auto", 5, "auto"),
  [theme.breakpoints.down("md")]: {
    justifySelf: "center",
    fontSize: "25px",
    margin: theme.spacing(0, 3, 3, 3),
    textAlign: "left",
  },
});

export const SectionSubtitle = styled(Typography)({
  maxWidth: 1100,
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, 3, 4, 3),
  },
});

export const Back = styled(IconButton)({
  position: "absolute",
  top: "50px",
  left: "200px",
  [theme.breakpoints.down("md")]: {
    top: "10px",
    left: "50px",
  },
});

export default { Container, SectionTitle, SectionSubtitle };
