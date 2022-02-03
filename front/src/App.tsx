import React from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import Write from './pages/Write';
import Chat from './pages/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/write" component={Write} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
