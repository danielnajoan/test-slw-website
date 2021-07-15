import React, { memo } from "react";
import GlobalStyle from "./globalStyles";
import {
  Home,
  AboutUs,
  Community,
  ContactUs,
  GetInvolved,
  Volunteer,
  Team,
} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/community" exact component={Community} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/get-involved" exact component={GetInvolved} />
        <Route path="/get-involved/volunteer" exact component={Volunteer} />
        <Route path="/about-us/team" exact component={Team} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default memo(App);
