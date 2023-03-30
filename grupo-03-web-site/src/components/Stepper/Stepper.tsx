"use client";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Buttons, theme } from "../HomePage/HomePage.styles";
import { ThemeProvider } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const steps = [
  {
    title: "1",
    text: "Ut rhoncus ultricies commodo. Nullam sollicitudin dapibus varius. Sed tincidunt in risus eget fringilla. Aliquam aliquam nibh velit, a tempor turpis accumsan ac. Pellentesque convallis, sapien eu hendrerit pulvinar, risus tellus accumsan metus, fermentum ullamcorper ligula enim sed erat. Suspendisse sed est iaculis ante faucibus gravida eget et risus. Nullam imperdiet ligula elit, ac pulvinar metus volutpat ut. Nam vitae magna nec dolor dapibus gravida non sit amet sem. Nullam ac quam vel orci elementum consectetur.",
  },
  {
    title: "2",
    text: "Praesent dui quam, suscipit id egestas ac, porta sed lectus. Maecenas fringilla dui in est fringilla tempus. Fusce rutrum ligula dui. In sit amet semper nisi. Cras aliquam, augue sit amet pharetra tempor, quam tortor tristique risus, sit amet placerat felis est elementum tortor. Nulla quis nulla neque. Ut varius, tellus eget pellentesque fringilla, leo tortor varius tortor, vitae consectetur est urna a mi. Pellentesque efficitur ultrices massa, in maximus ex facilisis non. Aliquam mollis sem leo, at convallis libero semper at. Etiam cursus nibh vel nisl sagittis pellentesque. Cras lacinia felis convallis erat congue pellentesque. Fusce sit amet lobortis risus. Aenean consequat felis eu tincidunt pulvinar. Nunc condimentum hendrerit mauris nec efficitur. Fusce non finibus dolor, sed sodales quam. Suspendisse facilisis mollis metus eu dictum.",
  },
  {
    title: "3",
    text: "Nunc id placerat nunc. Aliquam tortor erat, placerat fringilla cursus vitae, elementum a quam. Morbi pulvinar congue pellentesque. In iaculis tortor iaculis nibh varius, imperdiet tincidunt tellus sagittis. Nullam fermentum ultricies maximus. In leo tortor, venenatis et molestie sed, blandit et ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
];

function StepByStep() {
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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "20px 100px 0 100px",
          height: "85vh",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps?.map((step, index) => (
            <Step key={index}>
              <StepLabel>Step {index + 1}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box
          sx={{
            margin: "20px",
            height: "80%",
          }}
        >
          <Typography>{steps[activeStep].text}</Typography>
        </Box>
        <br />
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "end",
          }}
        >
          <Buttons
            variant="contained"
            color="primary"
            onClick={() => previousStep()}
            disabled={activeStep === 0}
            startIcon={<KeyboardArrowLeftIcon />}
          >
            Previous
          </Buttons>
          <Buttons
            variant="contained"
            color="primary"
            onClick={() => nextStep()}
            disabled={activeStep === maxSteps - 1}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Next
          </Buttons>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default StepByStep;
