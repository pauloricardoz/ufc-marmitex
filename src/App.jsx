import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import logo from './assets/logo-ufc-small.png';
import RegisterPage from './pages/register-page';
import RegisterDonor from './pages/register-Donor';
import registerPageFinish from './pages/register-finish-page';
import Schedule from './pages/Schedule';

function App() {
  return (
    <div className="main">
      <header className="header">
        {/*  <h1>UFC-Marmitex</h1> */}
        <div className="logo-div">

          <img src={ logo } alt="logo UFC-Marmitex" className="logo" />
        </div>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/schedule" component={ Schedule } />
          <Route path="/register-donor" component={ RegisterDonor } />
          <Route path="/register-finish" component={ registerPageFinish } />
          <Route path="/register" component={ RegisterPage } />
          <Route path="/home" component={ HomePage } />
          <Route path="/" component={ LoginPage } />
        </Switch>
      </BrowserRouter>
      <footer className="footer">
        <small>&copy; Copyright 2021, UFC-Marmitex dev-team</small>
      </footer>
    </div>
  );
}

export default App;
