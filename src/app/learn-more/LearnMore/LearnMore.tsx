"use client";
import { Box, Button } from "@mui/material";
import { Container, IWantToHelp } from "./LearnMore.styles";
import content from "../../../../public/data/LernMore";
import AboutUs from "../../../components/AboutUs/AboutUs";
import {
  SectionSubtitle,
  SectionTitle,
} from "../../../components/AboutUs/AboutUs.style";

export default function LearnMore() {
  return (
    <>
      <AboutUs />
      <Container>
        {content.text.map((item) => (
          <Box key={item.title}>
            <SectionTitle sx={item.sx ? item.sx : {}} variant="h4">
              {item.title}
            </SectionTitle>
            <SectionSubtitle>{item.subtitle}</SectionSubtitle>
          </Box>
        ))}
        <IWantToHelp>
          <Button variant="contained" href={content.iWantToHelp.buttonHref}>
            Quero ajudar!
          </Button>
        </IWantToHelp>
      </Container>
    </>
  );
}
