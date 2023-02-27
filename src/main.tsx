import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    third: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#CCCC99",
    },
    secondary: {
      main: "#CC8685",
    },
    third: {
      main: "#CC8685",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: {
            "font-family": "Lora, Roboto, sans-serif",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "white",
          display: "block",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 240,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
