import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteFooter from "./StickyFooter";
import SiteHeader from "./StickyHeader";
import Router from "../routing/base/Router";
import "./App.css";

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
