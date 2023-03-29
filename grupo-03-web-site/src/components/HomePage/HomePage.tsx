"use client";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#212121",
      main: "#212121",
      dark: "#616161",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#fff",
    },
  },
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "48px",
          backgroundColor: "black",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: "100px",
              letterSpacing: "-.05em",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            Smart YouTube recommendations with AI
          </Typography>
          <Typography
            mt={5}
            variant="body1"
            sx={{
              maxWidth: 1250,
              textAlign: "center",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-.02em",
              color: "#666",
            }}
          >
            TubeMind is a Machine Learning and Artificial Intelligence project
            that recommends personalized YouTube videos to users based on their
            interests. Our mission is to improve users&apos; viewing experience
            and provide an effective platform for content creators to reach
            their target audience.
          </Typography>
        </Box>
        <Box
          mt={5}
          sx={{
            width: "25%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            sx={{
              width: 300,
              padding: ".5rem",
              margin: ".5rem",
            }}
            variant="contained"
          >
            Learn more
          </Button>
          <Button
            sx={{
              width: 300,
              padding: ".5rem",
              margin: ".5rem",
            }}
            color="secondary"
            variant="contained"
          >
            Documentation
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
