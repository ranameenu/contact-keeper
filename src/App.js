import React from 'react';
import Topbar from './components/Topbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
