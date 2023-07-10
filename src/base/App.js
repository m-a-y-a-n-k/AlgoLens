import React from "react";
import SiteFooter from "./StickyFooter";
import SiteHeader from "./StickyHeader";
import Router from "../routing/base/Router";
import "./App.css";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#9BA4B5"}}>
      <SiteHeader />
      <Router />
      <SiteFooter />
    </div>
  );
}

export default App;
