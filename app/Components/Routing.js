import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RebricBandA from './RebricBandA';
import Main from './Main';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const Routing = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/rebric" component={RebricBandA} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
