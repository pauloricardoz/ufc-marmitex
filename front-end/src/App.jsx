import './App.css';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <header className="header">
       {/*  <h1>UFC-Marmitex</h1> */}
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
      <footer className="footer">
        <small>&copy; Copyright 2021, UFC-Marmitex dev-team</small>
      </footer>
    </div>
  );
}

export default App;
