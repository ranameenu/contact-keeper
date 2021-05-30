import React from 'react';
import Topbar from './Topbar';
import Register from './Register';
import Login from './Login';
import AddContact from './AddContact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <Switch>
          <Route exact path="/" component={AddContact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
