import "./App.css";
import LoginPage from './pages/login-page';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Route path='/' component={LoginPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
