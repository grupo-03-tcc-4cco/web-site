import { Box } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

export const theme = createTheme();

export const Group = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

export default { Group };
