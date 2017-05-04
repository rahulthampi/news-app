import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import News from '../container/News';


const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={News} />
      {/* <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />*/}
    </Switch>
  </BrowserRouter>
);

export default routes;
