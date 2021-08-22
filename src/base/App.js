import React from "react";
import SiteFooter from "./StickyFooter";
import SiteHeader from "./StickyHeader";
import Router from "../routing/base/Router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#162788",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#0D681C",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SiteHeader />
        <Router />
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
