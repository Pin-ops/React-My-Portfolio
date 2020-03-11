import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import TestimonialPage from './components/TestimonialPage'
import ErrorPage404 from './components/ErrorPage404'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/testimonial" component={TestimonialPage} />
          <Route component={ErrorPage404}/>
      </Switch>
    </div>
  );
}

export default App;
