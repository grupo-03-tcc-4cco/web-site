import { Box } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

export const theme = createTheme();

export const Container = styled(Box)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

export const IWantToHelp = styled(Box)({
  maxWidth: 1100,
  width: "100%",
  display: "flex",
});
