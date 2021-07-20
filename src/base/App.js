import React from "react";
import SiteFooter from "./StickyFooter";
import SiteHeader from "./StickyHeader";
import Router from "../routing/base/Router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Router />
      <SiteFooter />
    </div>
  );
}

export default App;
