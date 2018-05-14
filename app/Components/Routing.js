import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import RebricBandA from './RebricBandA';
import Main from './Main';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/rebric" component={RebricBandA} />
      </Switch>
    </Router>
  );
};

export default Routing;
