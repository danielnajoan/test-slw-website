import React, {memo} from 'react';
import GlobalStyle from './globalStyles';
import { Home, AboutUs, ContactUs, GetInvolved } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={AboutUs} />
        <Route path='/community' exact component={AboutUs} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/get-involved' exact component={GetInvolved} />
        <Route path='/team' exact component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default memo(App);
