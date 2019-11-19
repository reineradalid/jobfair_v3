import React from 'react';
import './App.css';
import Home from './components/home/index'
import SafetyTips from './components/common/about/safetytips'
import PrivacyPolicy from './components/common/about/privacyPolicy'
import Terms from './components/common/about/termsAndAgreement'
import FAQ from './components/common/about/faq'
import About from './components/common/about/about'
import { BrowserRouter, Route, Link, Router,Switch } from "react-router-dom";
 
// using CommonJS modules


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
        name="Home"
        exact
        path="/"
        component={Home}
        />
         <Route
        name="Safety"
        exact
        path="/safety-tips"
        component={SafetyTips}
        />
        <Route
        name="Privacy Policy"
        exact
        path="/privacy-policy"
        component={PrivacyPolicy}
        />
         <Route
        name="Terms and Agreement"
        exact
        path="/Terms&agreement"
        component={Terms}
        />
        <Route
        name="FAQ"
        exact
        path="/faq"
        component={FAQ}
        />
         <Route
        name="About"
        exact
        path="/about"
        component={About}
        />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
