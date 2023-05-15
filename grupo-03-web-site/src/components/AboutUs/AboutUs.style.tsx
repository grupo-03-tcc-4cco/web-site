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
});

export const SectionTitle = styled(Typography)({
  maxWidth: 1100,
  marginBottom: theme.spacing(5),
});

export const SectionSubtitle = styled(Typography)({
  maxWidth: 1100,
  marginBottom: theme.spacing(10),
});

export const Back = styled(IconButton)({
  position: "absolute",
  top: "50px",
  left: "200px",
});

export default { Container, SectionTitle, SectionSubtitle };
