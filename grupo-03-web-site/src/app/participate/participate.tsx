"use client";
import {
  BlackBelt,
  Buttons,
  Container,
  GroupButtons,
  PageSubtitle,
  theme,
} from "@/components/HomePage/HomePage.styles";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function Participate() {
  return (
    <ThemeProvider theme={theme}>
      <BlackBelt />
      <Container>
        <Typography variant="h2" component="h2" fontWeight={800}>
          How to participate?
        </Typography>
        <PageSubtitle>
          Submit your data and receive personalized video recommendations via
          email. Our Machine Learning and AI algorithms analyze your preferences
          to curate a customized viewing experience just for you. Start
          discovering the most relevant and interesting YouTube content today!
        </PageSubtitle>
        <GroupButtons>
          <Buttons href="steps" variant="contained" color="primary">
            Go to steps
          </Buttons>
          <Buttons href="/" variant="contained" color="secondary">
            Back
          </Buttons>
        </GroupButtons>
      </Container>
    </ThemeProvider>
  );
}
