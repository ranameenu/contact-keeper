import React from 'react';
import Topbar from './Topbar';
import Register from './Register';
import Addcontact from './Addcontact';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <Switch>
          <Route exact path="/" component={Addcontact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
