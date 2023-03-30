"use client";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  BlackBelt,
  Container,
  PageTexts,
  PageTitle,
  PageSubtitle,
  GroupButtons,
  Buttons,
  theme,
  AboutUsText,
} from "./HomePage.styles";

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <BlackBelt />
      <Container>
        <PageTexts>
          <PageTitle>Smart YouTube recommendations with AI</PageTitle>
          <PageSubtitle variant="body1">
            TubeMind is a Machine Learning and Artificial Intelligence project
            that recommends personalized YouTube videos to users based on their
            interests. Our mission is to improve users&apos; viewing experience
            and provide an effective platform for content creators to reach
            their target audience.
          </PageSubtitle>
        </PageTexts>
        <GroupButtons>
          <Buttons variant="contained" href="participate">
            Participate
          </Buttons>
          <Buttons color="secondary" variant="contained" href="#aboutus">
            About us
          </Buttons>
        </GroupButtons>
      </Container>
      <Container id="aboutus">
        <Typography variant="h2" component="h2" fontWeight={800}>
          Welcome to TubeMind!
        </Typography>
        <AboutUsText>
          <br />
          <br /> TubeMind is a Machine Learning and Artificial Intelligence
          project developed with the aim of recommending YouTube videos to
          users, customizing the viewing experience according to their
          interests.
          <br />
          <br /> Our goal is to provide a more satisfying user experience,
          increasing user engagement and watch time, as well as providing a more
          effective platform for content creators to reach their target
          audience.
          <br />
          <br />
          Utilizing advanced machine learning and AI techniques, TubeMind
          analyzes YouTube user data and uses algorithms to predict which videos
          will be most relevant and interesting for each user, continually
          improving its recommendations based on your feedback and viewing
          behavior.
          <br />
          <br />
          Feel free to explore our site and find out how TubeMind can help you
          find the most interesting and relevant YouTube videos!
        </AboutUsText>
      </Container>
    </ThemeProvider>
  );
}
