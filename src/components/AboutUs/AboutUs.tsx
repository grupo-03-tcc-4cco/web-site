"use client";
import {
  Container,
  SectionSubtitle,
  SectionTitle,
  Back,
} from "./AboutUs.style";
import Avatar from "../Avatar/Avatar";
import content from "../../../public/data/AboutUs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import button from "../../../public/data/LernMore";

export default function AboutUs() {
  return (
    <Container id="about_us" pt={10}>
      <Link href={button.back.buttonHref}>
        <Back size="large">
          <ArrowBackIcon />
        </Back>
      </Link>
      <Avatar />
      <SectionTitle variant="h4">{content.text.sectionTitle}</SectionTitle>
      <SectionSubtitle>{content.text.sectionSubtitle}</SectionSubtitle>
    </Container>
  );
}
