"use client";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  HomeSubtitle,
  HomeTitle,
  LeftGrid,
  LogoImage,
  RightGrid,
  theme,
} from "./HomePage.styles";
import logo from "../../../public/image/logo.png";
import content from "../../../public/data/HomePage";
import GroupButtons from "../GroupButtons/GroupButtons";

export default function HomePage2() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          padding: "0 15px",
        }}
      >
        <LeftGrid item xs={12} md={5}>
          <LogoImage priority src={logo} alt="Youtube logo" />
        </LeftGrid>
        <RightGrid item xs={12} md={7}>
          <HomeTitle variant="h1">{content.title}</HomeTitle>
          <HomeSubtitle>{content.subtitle}</HomeSubtitle>
          <GroupButtons />
        </RightGrid>
      </Grid>
    </ThemeProvider>
  );
}
