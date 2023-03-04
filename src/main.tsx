import { ThemeProvider, createTheme } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
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
  interface TypographyOptions {
    title: CSSProperties;
    news_title: CSSProperties;
    news_body: CSSProperties;
  }
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    news_title?: React.CSSProperties;
    news_body?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    news_title: true;
    news_body: true;
    title: true;
  }
}

const theme = createTheme({
  typography: {
    title: {
      fontSize: "2.5rem",
      fontFamily: "Lora, Roboto, sans-serif",
    },
    news_title: {
      fontSize: "1.5rem",
      fontFamily: "Lora, Roboto, sans-serif",
    },
    news_body: {
      fontSize: "1rem",
      fontFamily: "Lora, Roboto, sans-serif",
    },
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
