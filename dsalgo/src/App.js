import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteFooter from './dashboard/StickyFooter';
import SiteHeader from './dashboard/StickyHeader';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
       <SiteHeader /> 
       <Routes />
       <SiteFooter />  
    </div>
  );
}

export default App;
