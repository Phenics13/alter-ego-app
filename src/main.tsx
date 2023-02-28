import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import { persistor, store } from "./store/store";

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
      main: "#1C2833",
    },
    secondary: {
      main: "#34495E",
    },
    third: {
      main: "#CACFD2",
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
