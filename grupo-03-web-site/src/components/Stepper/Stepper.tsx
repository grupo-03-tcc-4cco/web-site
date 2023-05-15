"use client";
import steps from "../../../public/data/Steps";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Back } from "../AboutUs/AboutUs.style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import button from "../../../public/data/LernMore";
import { ButtonFinish, StepContent, Stepper, Section } from "./Stepper.styles";

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const nextStep = () => {
    if (activeStep < steps.length)
      setActiveStep((currentStep) => currentStep + 1);
  };

  const previousStep = () => {
    if (activeStep !== -1) setActiveStep((currentstep) => currentstep - 1);
  };

  return (
    <Section>
      <Link href={button.back.buttonHref}>
        <Back size="large">
          <ArrowBackIcon />
        </Back>
      </Link>
      <StepContent>
        <Typography variant="h5" m={2}>
          {steps[activeStep].title}
        </Typography>
        {/* <Box> */}
        <Typography maxWidth={550} mb={2}>
          {steps[activeStep].firstText}
        </Typography>
        <Typography maxWidth={550} mb={2}>
          {steps[activeStep].secondText}
        </Typography>
        <Image priority {...steps[activeStep].image1} />
        <Typography maxWidth={550} my={2}>
          {steps[activeStep].thirdText}
        </Typography>
        <Image priority {...steps[activeStep].image2} />
        <Typography maxWidth={550} my={2}>
          {steps[activeStep].fourthText}
        </Typography>
        {/* </Box> */}
      </StepContent>
      <Stepper
        variant="dots"
        steps={maxSteps}
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{
              marginLeft: 5,
            }}
            onClick={() => nextStep()}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{
              marginRight: 5,
            }}
            onClick={() => previousStep()}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Link href="/formulario">
        <ButtonFinish disabled={activeStep === maxSteps - 1 ? false : true}>
          finalizar
        </ButtonFinish>
      </Link>
    </Section>
  );
}
