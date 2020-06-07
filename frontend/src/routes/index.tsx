import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ViewRepositoriesSaved from '../pages/ViewRepositoriesSaved';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/view" component={ViewRepositoriesSaved} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
