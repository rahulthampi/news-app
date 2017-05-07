import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import App from '../components/App';
import Homepage from '../components/Homepage';
import News from '../container/News';
import NoPage from '../components/NoPage';

const routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/news" component={News} />
        <Route component={NoPage} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default routes;
