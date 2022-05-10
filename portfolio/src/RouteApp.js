import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const RouteApp = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/about' component={ About } />
  </Switch>
);

export default RouteApp;
